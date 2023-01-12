import { model, Schema } from 'mongoose';
import { Chat as IChat } from '../../types';

const ChatSchema = new Schema<IChat>(
  {
    recipients: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    messages: [{ type: Schema.Types.ObjectId, ref: 'message' }],
    admins: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    createdBy: { type: Schema.Types.ObjectId, ref: 'user' },
  },
  {
    timestamps: true,
  }
);

export const Chat = model<IChat>('chat', ChatSchema);
