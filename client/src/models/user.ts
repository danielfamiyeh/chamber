import { Schema } from './schema';
import { User } from '../../types';

export const UserSchema = new Schema<User>([
  { key: 'id', type: String },
  { key: 'chatIds', type: Array<String> },
]);
