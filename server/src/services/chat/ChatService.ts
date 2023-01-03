import { assertExists } from '../../utils/assert';
import { Chat, ChatMap, Message } from '../../../types';
import { ChatSchema } from '../../models/chat';
import { MessageSchema } from '../../models';
import { UserService } from '../user/UserService';
import { clientStore } from '../../store/client';

const { users } = UserService;

export class ChatService {
  static chats: ChatMap = {};

  static createChat(username1: string, username2: string): Chat {
    const { chats } = this;
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
    const { chats } = this;
    const [sender, chat] = [users[senderName], chats[chatId]];

    assertExists({ sender }) && assertExists({ chat });

    const isUser1 = chat.user1 === senderName;
    const recipient = users[chat[isUser1 ? 'user2' : 'user1']];

    if (!sender.friends.includes(recipient.username)) {
      throw new Error(`${recipient.username} is not in your friends list`);
    }

    const recipientClient = clientStore[recipient.username];

    const message = {
      ...MessageSchema.model,
      content,
      sender: senderName,
      chatId,
    };

    recipientClient?.res?.write(JSON.stringify(message));
    chat.messages.push(message);

    return message;
  }

  static getMessages(chatId: string, startIdx = 0, endIdx = 20): Message[] {
    const { chats } = this;
    return (chats[chatId]?.messages ?? []).slice(startIdx, endIdx);
  }
}
