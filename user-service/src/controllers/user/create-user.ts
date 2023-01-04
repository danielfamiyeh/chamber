import { models } from '../../models';

export async function createUser(username: string) {
  const user = new models.User({ username });
  const doc = await user.save();

  return doc;
}
