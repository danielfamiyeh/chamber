import { models } from '../models';

export class UserService {
  static async createUser(username: string) {
    const user = new models.User({ username });

    const doc = await user.save();
    return doc;
  }
}
