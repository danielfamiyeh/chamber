import { FriendRequestSchema } from '../../models/request';
import { assertExists } from '../../utils/assert';
import { clients } from '../../store';
import { users } from '../../store';

export class FriendService {
  static addFriend(requesterUsername: string, requestedUsername: string) {
    const requester = users[requesterUsername];
    const requestedUser = users[requestedUsername];

    assertExists({ requester }) && assertExists({ requestedUser });

    if (requester.friends.includes(requestedUser.username)) {
      throw new Error(`${requestedUsername} is already your friend`);
    }

    if (
      requester.outgoingFriendRequests.find(
        ({ to }) => to === requestedUsername
      )
    ) {
      throw new Error(`Already sent a request to ${requestedUsername}`);
    }

    const friendRequest = {
      ...FriendRequestSchema.model,
      from: requesterUsername,
      to: requestedUsername,
    };

    requester.outgoingFriendRequests.push(friendRequest);
    requestedUser.incomingFriendRequests.push(friendRequest);

    clients[requestedUsername]?.res?.write(JSON.stringify({ friendRequest }));
  }

  static acceptRequest(requesterUsername: string, requestedUsername: string) {
    const requester = users[requesterUsername];
    const requestedUser = users[requestedUsername];

    assertExists({ requester }) && assertExists({ requestedUser });

    if (
      !requestedUser?.incomingFriendRequests.find(
        ({ from }) => from === requesterUsername
      )
    ) {
      throw new Error("Friend request doesn't exist");
    }

    // Add friends in each user's list
    requester.friends.push(requestedUsername);
    requestedUser.friends.push(requesterUsername);

    // Remove requests
    requester.outgoingFriendRequests.splice(
      requester.outgoingFriendRequests.findIndex(
        ({ to }) => to === requestedUsername
      ),
      1
    );
    requestedUser.incomingFriendRequests.splice(
      requestedUser.incomingFriendRequests.findIndex(
        ({ from }) => from === requesterUsername
      ),
      1
    );

    // Notify requester and requested
  }

  static rejectRequest(requesterUsername: string, requestedUsername: string) {
    const requester = users[requesterUsername];
    const requestedUser = users[requestedUsername];

    assertExists({ requester }) && assertExists({ requestedUser });

    if (
      !requestedUser?.incomingFriendRequests.find(
        ({ from }) => from === requesterUsername
      )
    ) {
      throw new Error("Friend request doesn't exist");
    }

    // Remove requests
    requester.outgoingFriendRequests.splice(
      requester.outgoingFriendRequests.findIndex(
        ({ to }) => to === requestedUsername
      ),
      1
    );
    requestedUser.incomingFriendRequests.splice(
      requestedUser.incomingFriendRequests.findIndex(
        ({ from }) => from === requesterUsername
      ),
      1
    );
  }
}
