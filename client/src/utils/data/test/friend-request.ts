import { FriendRequest } from '@danielfamiyeh/chamber-common';
import { testUser, testUser3 } from './user';

export const testFriendRequest: FriendRequest = {
  _id: 'test-friend-request',
  to: testUser,
  from: testUser3,
};
