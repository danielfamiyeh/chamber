import { models } from '../../models';

export async function deleteUser(username: string) {
  const numAffected = await models.User.findOneAndRemove({ username });
  return !!numAffected;
}
