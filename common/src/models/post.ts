import { model, Schema } from 'mongoose';

export const PostSchema = new Schema(
  {
    content: [{ type: Schema.Types.ObjectId, ref: 'Content' }],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export const Post = model('post', PostSchema);
