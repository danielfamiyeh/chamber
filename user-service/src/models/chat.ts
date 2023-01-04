import { model, Schema } from 'mongoose';

const ChatSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    recipients: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  },
  {
    timestamps: true,
  }
);

export const Chat = model('Chat', ChatSchema);
