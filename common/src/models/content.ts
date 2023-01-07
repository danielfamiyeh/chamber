import { model, Schema } from 'mongoose';

export const ContentSchema = new Schema(
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
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export const Content = model('content', ContentSchema);
