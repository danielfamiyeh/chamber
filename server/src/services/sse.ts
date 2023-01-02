import { randomUUID } from 'crypto';

import { ChatMap, UserMap } from '../../types';
import { assertExists } from '../utils/assert';
import { UserSchema } from '../models';

export default class SSEChatService {
  static users: UserMap = {};
  static chats: ChatMap = {};

  static createUser(username: string) {
    if (this.users[username])
      throw new Error(`User with username: ${username} already exists.`);

    const id = randomUUID();
    const user = { ...UserSchema.model, id, username };

    this.users[username] = user;
    return user;
  }
  static createChat(userId1: string, userId2: string) {
    const { chats, users } = this;
    const [user1, user2] = [users[userId1], users[userId2]];

    assertExists({ user1 }) && assertExists({ user2 });

    // const convoExists = Object.values(chats).find(({user1, user2}))
  }
}
