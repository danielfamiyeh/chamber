import { Session } from '../../types';
import { Schema } from './schema';

export const SessionSchema = new Schema<Session>([
  {
    key: 'id',
    type: String,
  },
  {
    key: 'token',
    type: String,
  },
]);
