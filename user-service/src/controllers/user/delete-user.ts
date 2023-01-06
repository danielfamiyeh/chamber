import { models } from '@danielfamiyeh/chamber-common/src';

export async function deleteUser(username: string) {
  const numAffected = await models.User.findOneAndRemove({ username });
  return !!numAffected;
}
