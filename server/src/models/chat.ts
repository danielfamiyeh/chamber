import { Schema } from '../utils/schema';
import { Chat, Message } from '../../types';

export const ChatSchema = new Schema<Chat>([
  { key: 'id', type: String },
  { key: 'userId1', type: String },
  { key: 'userId2', type: String },
  { key: 'messages', type: Array<Message> },
]);
