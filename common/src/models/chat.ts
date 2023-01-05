import { model, Schema } from 'mongoose';

const ChatSchema = new Schema(
  {
    recipients: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    admins: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: true,
  }
);

export const Chat = model('Chat', ChatSchema);
