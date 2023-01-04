import { model, Schema } from 'mongoose';

const FriendRequestSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
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

export const FriendRequest = model('FriendRequest', FriendRequestSchema);
