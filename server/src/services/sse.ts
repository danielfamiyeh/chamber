import { Chat, ChatMap, UserMap } from '../../types';
import { assertExists } from '../utils/assert';
import { ChatSchema } from '../models/chat';
import { UserSchema } from '../models';

export default class SSEChatService {
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

    return chat;
  }
}
