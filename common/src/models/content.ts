import { model, Schema } from 'mongoose';
import { Content as IContent } from '../../types';

export const ContentSchema = new Schema<IContent<any>>(
  {
    relatedCollection: {
      type: String,
      enum: ['post', 'chat'],
      required: true,
    },
    relatedId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    type: {
      type: String,
      enum: ['text', 'image'],
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { timestamps: true }
);

export const Content = model<IContent<any>>('content', ContentSchema);
