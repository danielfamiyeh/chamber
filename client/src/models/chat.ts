import { Schema } from './schema';
import { Chat, Message } from '../../types';

export const ChatSchema = new Schema<Chat>([
  { key: 'id', type: String },
  { key: 'user1', type: String },
  { key: 'user2', type: String },
  { key: 'messages', type: Array<Message> },
]);
