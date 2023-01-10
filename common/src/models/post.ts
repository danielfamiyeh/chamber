import { model, Schema } from 'mongoose';
import { Post as IPost } from '../../types';

export const PostSchema = new Schema<IPost>(
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

export const Post = model<IPost>('post', PostSchema);
