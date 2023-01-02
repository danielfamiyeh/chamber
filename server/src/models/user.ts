import { Schema } from '../utils/schema';

export const UserSchema = new Schema([
  { key: 'id', type: String },
  { key: 'chatIds', type: Array<String> },
]);
