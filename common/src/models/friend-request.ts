import { model, Schema } from 'mongoose';
import { FriendRequest as IFriendRequest } from '../../types';

const FriendRequestSchema = new Schema<IFriendRequest>(
  {
    from: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    to: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const FriendRequest = model<IFriendRequest>(
  'FriendRequest',
  FriendRequestSchema
);
