import { assertExists } from '../../utils/assert';
import { UserSchema } from '../../models';
import { UserMap } from '../../../types';
import { FriendRequestSchema } from '../../models/request';

export class UserService {
  static users: UserMap = {};

  static createUser(username: string) {
    const { users } = this;
    if (users[username])
      throw new Error(`User with username '${username}' already exists.`);

    const user = { ...UserSchema.model, username };

    users[username] = user;
    return user;
  }

  static addFriend(requesterUsername: string, requestedUsername: string) {
    const { users } = this;

    const requester = users[requesterUsername];
    const requestedUser = users[requestedUsername];

    assertExists({ requester }) && assertExists({ requestedUser });

    requester.outgoingFriendRequests.push({
      ...FriendRequestSchema.model,
      username: requestedUsername,
    });
    requestedUser.incomingFriendRequests.push({
      ...FriendRequestSchema.model,
      username: requestedUsername,
    });
  }
}
