import { User } from '@danielfamiyeh/chamber-common';
import { testFriendRequest } from './friend-request';

export const testUser: Omit<User, 'validatePassword' | 'password'> = {
  _id: 'test-user-1',
  username: 'daniel',
  incomingFriendRequests: [testFriendRequest],
  outgoingFriendRequests: [],
  friends: [testUser2],
  chats: [],
};

export const testUser2: Omit<User, 'validatePassword' | 'password'> = {
  _id: 'test-user-2',
  username: 'daniel2',
  incomingFriendRequests: [],
  outgoingFriendRequests: [],
  friends: [testUser],
  chats: [],
};

export const testUser3: Omit<User, 'validatePassword' | 'password'> = {
  _id: 'test-user-2',
  username: 'daniel2',
  incomingFriendRequests: [],
  outgoingFriendRequests: [testFriendRequest],
  friends: [],
  chats: [],
};
