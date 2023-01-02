import { Schema } from '../../types';

export const UserSchema: Schema = [
  { key: 'id', type: String },
  { key: 'conversations', type: Array<String> },
];
