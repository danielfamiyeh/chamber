import { Chat } from '@danielfamiyeh/chamber-common';
import { testUser, testUser2 } from './user';

export const testChat: Chat = {
  _id: 'test-chat-1',
  recipients: [testUser, testUser2],
  admins: [testUser],
  createdBy: testUser,
  createdAt: new Date(),
};
