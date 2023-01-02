import { Schema } from '../../types';

export const MessageSchema: Schema = [
  { key: 'id', type: String },
  { key: 'content', type: String },
  { key: 'senderId', type: String },
  { key: 'recipientId', type: String },
];
