import { Request, Response } from 'express';

import { FriendRequestSchema } from '../../models/request';
import { assertExists } from '../../utils/assert';
import { UserSchema } from '../../models';
import { UserMap } from '../../../types';

export class UserService {
  static users: UserMap = {};
  static clients: Record<string, { req: Request; res: Response }> = {};

  static createUser(username: string) {
    const { users } = this;
    if (users[username])
      throw new Error(`User with username '${username}' already exists.`);

    const user = { ...UserSchema.model, username };

    users[username] = user;
    return user;
  }

  static addFriend(requesterUsername: string, requestedUsername: string) {
    const { clients, users } = this;

    const requester = users[requesterUsername];
    const requestedUser = users[requestedUsername];

    assertExists({ requester }) && assertExists({ requestedUser });

    requester.outgoingFriendRequests.push({
      ...FriendRequestSchema.model,
      username: requestedUsername,
    });

    const outgoingRequest = {
      ...FriendRequestSchema.model,
      username: requestedUsername,
    };

    requestedUser.incomingFriendRequests.push(outgoingRequest);

    clients[requestedUsername]?.res?.write(
      JSON.stringify({ friendRequest: outgoingRequest })
    );
  }
}
