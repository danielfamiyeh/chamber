import { Chat, ChatMap, Message, UserMap } from '../../../types';
import { MessageSchema, UserSchema } from '../../models';
import { assertExists } from '../../utils/assert';
import { ChatSchema } from '../../models/chat';
import { SSE } from './sse';

export class ChatService {
  static sse = SSE;

  static users: UserMap = {};
  static chats: ChatMap = {};

  static createUser(username: string) {
    if (this.users[username])
      throw new Error(`User with username '${username}' already exists.`);

    const user = { ...UserSchema.model, username };

    this.users[username] = user;
    return user;
  }

  static createChat(username1: string, username2: string): Chat {
    const { chats, users } = this;
    const [user1, user2] = [users[username1], users[username2]];

    assertExists({ user1 }) && assertExists({ user2 });

    const [existingChatId] = user1.chatIds.filter(
      (chatId) =>
        chats[chatId] && !!user2.chatIds.find((_chatId) => chatId === _chatId)
    );

    if (existingChatId) return chats[existingChatId];

    const chat = { ...ChatSchema.model, user1: username1, user2: username2 };

    user1.chatIds.push(chat.id);
    user2.chatIds.push(chat.id);

    return (chats[chat.id] = chat);
  }

  static sendMessage(
    chatId: string,
    senderName: string,
    content: string
  ): Message {
    const { users, chats } = this;
    const [sender, chat] = [users[senderName], chats[chatId]];

    assertExists({ sender }) && assertExists({ chat });

    const isUser1 = chat.user1 === senderName;
    const message = {
      ...MessageSchema.model,
      content,
      sender: senderName,
      chatId,
    };
    const recipient = users[chat[isUser1 ? 'user2' : 'user1']];

    const recipientClient = ChatService.sse.clients[recipient.username];

    recipientClient?.res?.write(JSON.stringify(message));
    chat.messages.push(message);

    return message;
  }

  static getMessages(chatId: string, startIdx = 0, endIdx = 20): Message[] {
    return (this.chats[chatId]?.messages ?? []).slice(startIdx, endIdx);
  }
}
