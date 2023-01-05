import { model, Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    chats: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Chat',
      },
    ],

    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],

    incomingFriendRequests: [
      { type: Schema.Types.ObjectId, ref: 'FriendRequest' },
    ],

    outgoingFriendRequests: [
      { type: Schema.Types.ObjectId, ref: 'FriendRequest' },
    ],
  },
  { timestamps: true }
);

export const User = model('User', UserSchema);
