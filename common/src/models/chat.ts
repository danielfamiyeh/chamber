import { model, Schema } from 'mongoose';
import { Chat as IChat } from '../../types';

const ChatSchema = new Schema<IChat>(
  {
    recipients: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    admins: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

export const Chat = model<IChat>('Chat', ChatSchema);
