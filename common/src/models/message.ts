import { model, Schema } from 'mongoose';

const MessageSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: 'Chat',
    },
    content: {
      type: {
        type: String,
        enum: ['text', 'image'],
      },

      value: String,
    },
  },
  { timestamps: true }
);

export const Message = model('Message', MessageSchema);
