import { SSEChatService } from './sse';
import { WebsocketChatService } from './websocket';

import { Chat, ChatMap, Message, UserMap } from '../../../types';
import { MessageSchema, UserSchema } from '../../models';
import { assertExists } from '../../utils/assert';
import { ChatSchema } from '../../models/chat';

export class ChatService {
  static sse = SSEChatService;
  static socket = WebsocketChatService;

  static users: UserMap = {};
  static chats: ChatMap = {};

  static createUser(username: string) {
    if (this.users[username])
      throw new Error(`User with username: ${username} already exists.`);

    const user = { ...UserSchema.model, username };

    this.users[username] = user;
    return user;
  }

  static createChat(userId1: string, userId2: string): Chat {
    const { chats, users } = this;
    const [user1, user2] = [users[userId1], users[userId2]];

    assertExists({ user1 }) && assertExists({ user2 });

    const [existingChatId] = user1.chatIds.filter(
      (chatId) =>
        chats[chatId] && !!user2.chatIds.find((_chatId) => chatId === _chatId)
    );

    if (existingChatId) return chats[existingChatId];

    const chat = { ...ChatSchema.model, userId1, userId2 };

    user1.chatIds.push(chat.id);
    user2.chatIds.push(chat.id);

    return (chats[chat.id] = chat);
  }

  static sendMessage(
    chatId: string,
    senderId: string,
    content: string
  ): Message {
    const { users, chats } = this;
    const [sender, chat] = [users[senderId], chats[chatId]];

    assertExists({ sender }) && assertExists({ chat });

    const message = { ...MessageSchema.model, content, senderId };
    chat.messages.push(message);

    return message;
  }

  static getMessages(chatId: string, startIdx = 0, endIdx = 20): Message[] {
    return (this.chats[chatId]?.messages ?? []).slice(startIdx, endIdx);
  }
}
