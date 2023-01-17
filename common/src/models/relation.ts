import { model, Schema } from 'mongoose';

import {
  Relation as IRelation,
  RelationRequest as IRelationRequest,
} from '../../types';

export const RelationTypeSchema = {
  type: String,
  enum: ['friend', 'closeFriend'],
};

const RelationRequestSchema = new Schema<IRelationRequest>(
  {
    from: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },

    to: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },

    type: RelationTypeSchema,
  },
  { timestamps: true }
);

const RelationSchema = new Schema<IRelation>(
  {
    type: RelationTypeSchema,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    timestamps: true,
  }
);

export const RelationRequest = model<IRelationRequest>(
  'relationrequest',
  RelationRequestSchema
);

export const Relation = model<IRelation>('relation', RelationSchema);
