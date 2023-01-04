import { models } from '../../models';
import { db } from '../../utils/db';

export async function createUser(username: string) {
  const usernameTaken = await db.collection('users').findOne({ username });
  if (usernameTaken) throw new Error('Username taken');

  const user = new models.User({
    username,
  });

  await user.validate();
  await db.collection('users').insertOne(user);

  return user;
}
