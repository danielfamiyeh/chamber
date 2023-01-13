import { User } from '@danielfamiyeh/chamber-common';
import { testFriendRequest } from './friend-request';

export const testUser: Omit<User, 'validatePassword' | 'password'> = {
  _id: 'test-user-1',
  username: 'daniel',
  incomingRelationRequests: [testFriendRequest],
  outgoingRelationRequests: [],
  friends: [testUser2],
  createdAt: new Date(),
  updatedAt: new Date(),
  avatar:
    'https://media.licdn.com/dms/image/D4D03AQHWNeTePP-x7A/profile-displayphoto-shrink_800_800/0/1647981019385?e=1678924800&v=beta&t=UFfiYwzr-i7X09-_5cCm4Hb6FjKNjPnppI0dqtTXOaU',
  chats: [],
};

export const testUser2: Omit<User, 'validatePassword' | 'password'> = {
  _id: 'test-user-2',
  username: 'daniel2',
  incomingRelationRequests: [],
  outgoingRelationRequests: [],
  friends: [testUser],
  chats: [],
};

export const testUser3: Omit<User, 'validatePassword' | 'password'> = {
  _id: 'test-user-2',
  username: 'daniel2',
  incomingRelationRequests: [],
  outgoingRelationRequests: [testFriendRequest],
  friends: [],
  chats: [],
};
