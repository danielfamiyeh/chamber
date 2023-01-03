import { UserSchema } from '../../models';

import { userServiceStore as users } from './UserService.store';

export class UserService {
  static createUser(username: string) {
    if (users[username])
      throw new Error(`User with username '${username}' already exists.`);

    const user = { ...UserSchema.model, username };

    users[username] = user;
    return user;
  }

  static addFriend(username: string, requestedUsername: string) {}
}
