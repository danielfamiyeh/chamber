import { Schema } from '../utils/schema';

export const ChatSchema = new Schema([
  { key: 'id', type: String },
  { key: 'with', type: String },
]);
