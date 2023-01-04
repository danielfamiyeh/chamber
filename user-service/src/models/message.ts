import { model, Schema } from 'mongoose';

const MessageSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
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
