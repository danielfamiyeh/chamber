import { UserSchema } from '../../models';
import { users } from '../../store';

export class UserService {
  static createUser(username: string) {
    if (users[username])
      throw new Error(`User with username '${username}' already exists.`);

    const user = { ...UserSchema.model, username };

    users[username] = user;
    return user;
  }
}
