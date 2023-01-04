import { model, Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },

    chats: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Chat',
      },
    ],

    friends: {
      type: Array<Schema.Types.ObjectId>,
      defaultValue: [],
    },

    friendRequests: {
      type: {
        incoming: [
          { type: Schema.Types.ObjectId, ref: 'FriendRequest', unique: true },
        ],
        outgoing: [
          { type: Schema.Types.ObjectId, ref: 'FriendRequest', unique: true },
        ],
      },
    },
  },
  { timestamps: true }
);

export const User = model('User', UserSchema);
