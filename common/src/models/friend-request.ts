import { model, Schema } from 'mongoose';
import { FriendRequest as IFriendRequest } from '../../types';

const FriendRequestSchema = new Schema<IFriendRequest>(
  {
    from: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },

    to: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
  },
  { timestamps: true }
);

export const FriendRequest = model<IFriendRequest>(
  'friendrequest',
  FriendRequestSchema
);
