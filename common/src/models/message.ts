import { model, Schema } from 'mongoose';

import {
  Message as IMessage,
  MessageReadReceipt as IMessageReadReceipt,
} from '../../types';

const MessageReadReceiptSchema = new Schema<IMessageReadReceipt>(
  {
    readBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: 'chat',
    },
  },
  { timestamps: true }
);

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
    readReceipts: [MessageReadReceiptSchema],
  },
  { timestamps: true }
);

export const Message = model<IMessage>('message', MessageSchema);
