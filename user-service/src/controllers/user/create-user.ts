import { models } from '../../models';
import { db } from '../../utils/db';

export async function createUser(username: string) {
  const usernameTaken = await db.collection('users').findOne({ username });
  if (usernameTaken) throw new Error('Username taken');

  const doc = await models.User.create({
    username,
  });

  return doc;
}
