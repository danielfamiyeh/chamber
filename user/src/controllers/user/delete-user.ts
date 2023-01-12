import { Types } from 'mongoose';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

export async function deleteUser(_id: string) {
  const numAffected = await models.User.findOneAndRemove({
    _id: new Types.ObjectId(_id),
  });
  return !!numAffected;
}
