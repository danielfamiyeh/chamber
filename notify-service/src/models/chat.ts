import { model, Schema } from 'mongoose';

const ChatSchema = new Schema(
  {
    recipients: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  },
  {
    timestamps: true,
  }
);

export const Chat = model('Chat', ChatSchema);
