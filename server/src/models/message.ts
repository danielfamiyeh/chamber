import { Message } from '../../types';
import { Schema } from '../utils/schema';

export const MessageSchema = new Schema<Message>([
  { key: 'id', type: String },
  { key: 'content', type: String },
  { key: 'senderId', type: String },
  { key: 'createdAt', type: Date },
]);
