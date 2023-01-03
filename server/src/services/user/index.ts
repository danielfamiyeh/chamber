import { UserMap } from '../../../types';
import { UserSchema } from '../../models';

export class UserService {
  static users: UserMap = {};

  static createUser(username: string) {
    if (this.users[username])
      throw new Error(`User with username '${username}' already exists.`);

    const user = { ...UserSchema.model, username };

    this.users[username] = user;
    return user;
  }

  static addFriend(username: string, requestedUsername: string) {}
}
