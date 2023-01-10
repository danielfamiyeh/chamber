import { Message } from '@danielfamiyeh/chamber-common';
import { testUser, testUser2 } from './user';

export const testMessage: Message = {
  _id: 'test-message-1',
  sender: testUser,
  createdAt: new Date(),
  chat: 'test-chat-1',
  content: {
    type: 'text',
    value: 'Hello',
  },
};

export const testMessage2: Message = {
  _id: 'test-message-2',
  sender: testUser2,
  createdAt: new Date(),
  chat: 'test-chat-1',
  content: {
    type: 'text',
    value: 'Hello to you too',
  },
};
