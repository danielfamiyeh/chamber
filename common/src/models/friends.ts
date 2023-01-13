import { Schema, model } from 'mongoose';

const RelationSchema = new Schema({
  type: {
    type: String,
    enum: ['friend', 'closeFriend'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
});

export const Relation = model('relationship', RelationSchema);
