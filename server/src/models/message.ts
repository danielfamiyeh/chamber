import { Schema } from '../utils/schema';

export const MessageSchema = new Schema([
  { key: 'id', type: String },
  { key: 'content', type: String },
  { key: 'senderId', type: String },
  { key: 'recipientId', type: String },
]);
