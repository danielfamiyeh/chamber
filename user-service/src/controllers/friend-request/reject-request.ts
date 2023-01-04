import { models } from '../../models';
import { FriendRequest } from '../../../types';

export async function rejectFriendRequest(
  username1: string,
  username2: string
) {
  const requester = await models.User.findOne({ username: username1 })
    .populate('friends')
    .populate('friendRequests')
    .exec();

  const requested = await models.User.findOne({
    username: username2,
  }).populate('friendRequests');

  if (!(requester && requested)) {
    throw new Error('Trouble fetching user data');
  }

  if (
    !(requested?.friendRequests.incoming as unknown as FriendRequest[]).find(
      ({ from }) => from === username1
    )
  ) {
    throw new Error("Friend request doesn't exist");
  }

  await models.User.findOneAndUpdate(
    { username: username1 },
    {
      $set: {
        'friendRequests.outgoing': (
          requester.friendRequests.outgoing as unknown as FriendRequest[]
        ).filter(({ to }) => to !== username2),
      },
    }
  );

  await models.User.findOneAndUpdate(
    { username: username2 },
    {
      $set: {
        'friendRequests.incoming': (
          requested.friendRequests.incoming as unknown as FriendRequest[]
        ).filter(({ to }) => to !== username1),
      },
    }
  );
}
