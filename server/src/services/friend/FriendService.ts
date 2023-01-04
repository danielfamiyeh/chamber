import { FriendRequestSchema } from '../../models/request';
import { clientStore as clients } from '../../store';
import { assertExists } from '../../utils/assert';
import { userStore as users } from '../../store';

export class FriendService {
  static addFriend(requesterUsername: string, requestedUsername: string) {
    const requester = users[requesterUsername];
    const requestedUser = users[requestedUsername];

    assertExists({ requester }) && assertExists({ requestedUser });

    if (requester.friends.includes(requestedUser.username)) {
      throw new Error(`${requestedUsername} is already your friend`);
    }

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
