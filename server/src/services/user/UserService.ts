import { userServiceStore as users } from './UserService.store';
import { assertExists } from '../../utils/assert';
import { UserSchema } from '../../models';

export class UserService {
  static createUser(username: string) {
    if (users[username])
      throw new Error(`User with username '${username}' already exists.`);

    const user = { ...UserSchema.model, username };

    users[username] = user;
    return user;
  }

  static addFriend(requesterUsername: string, requestedUsername: string) {
    const requesterUser = users[requesterUsername];
    const requestedUser = users[requestedUsername];

    assertExists({ requesterUser }) && assertExists({ requestedUser });
  }
}
