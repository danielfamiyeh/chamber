import { FriendRequest } from '../../types';
import { Schema } from '../utils/schema';

export const FriendRequestSchema = new Schema<FriendRequest>([
  { key: 'id', type: String },
  { key: 'to', type: String },
  { key: 'from', type: String },
  { key: 'createdAt', type: Date },
]);
