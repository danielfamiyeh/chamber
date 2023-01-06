import { models } from '@danielfamiyeh/chamber-common/src';

export async function createUser(username: string) {
  const usernameTaken = await models.User.findOne({ username });
  if (usernameTaken) throw new Error('Username taken');

  const doc = await models.User.create({
    username,
  });

  return doc;
}
