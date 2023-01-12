import { model, Schema } from 'mongoose';
import { Message as IMessage } from '../../types';

const MessageSchema = new Schema<IMessage>(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: 'chat',
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

export const Message = model<IMessage>('message', MessageSchema);
