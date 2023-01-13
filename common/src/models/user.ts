import { compare, hash } from 'bcrypt';
import { model, Schema } from 'mongoose';
import { User as IUser } from '../../types';

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      minlength: 6,
      maxlength: 42,
      required: true,
    },

    chats: [
      {
        type: Schema.Types.ObjectId,
        ref: 'chat',
      },
    ],

    relations: [
      {
        type: Schema.Types.ObjectId,
        ref: 'relation',
      },
    ],

    incomingRelationRequests: [
      { type: Schema.Types.ObjectId, ref: 'relationrequest' },
    ],

    outgoingRelationRequests: [
      { type: Schema.Types.ObjectId, ref: 'relationrequest' },
    ],
  },
  { timestamps: true }
);

const createHash = function (password: string) {
  const saltRounds = 10;
  return hash(password, saltRounds);
};

UserSchema.pre('save', async function () {
  this.password = await createHash(this.password);
});

UserSchema.pre<IUser & { getUpdate: () => any }>(
  'findOneAndUpdate',
  async function (next) {
    const password = this.getUpdate().$set.password;
    return password
      ? (this.getUpdate().$set.password =
          (await createHash(password)) && next())
      : next();
  }
);

UserSchema.methods.validatePassword = function (password: string) {
  return compare(password, this.password);
};

export const User = model<IUser>('user', UserSchema);
