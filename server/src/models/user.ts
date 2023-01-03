import { Schema } from '../utils/schema';
import { FriendRequest, User } from '../../types';

export const UserSchema = new Schema<User>([
  { key: 'id', type: String },
  { key: 'username', type: String },
  { key: 'chatIds', type: Array<String> },
  { key: 'friends', type: Array<String> },
  { key: 'incomingFriendRequests', type: Array<FriendRequest> },
  { key: 'outgoingFriendRequests', type: Array<FriendRequest> },
]);
