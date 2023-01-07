import { models } from '@danielfamiyeh/chamber-common';
import { FriendRequest } from '@danielfamiyeh/chamber-common/types';

export async function rejectFriendRequest(
  username1: string,
  username2: string
) {
  const requester = await models.User.findOne({ username: username1 })
    .populate('friends')
    .populate('outgoingFriendRequests')
    .exec();

  const requested = await models.User.findOne({
    username: username2,
  }).populate('incomingFriendRequests');

  if (!(requester && requested)) {
    throw new Error('Trouble fetching user data');
  }

  if (
    !(requested?.incomingFriendRequests as unknown as FriendRequest[]).find(
      ({ from }) => from.toString() === requester._id.toString()
    )
  ) {
    throw new Error("Friend request doesn't exist");
  }

  await models.FriendRequest.deleteMany({
    from: requester._id,
    to: requested._id,
  });

  await models.User.findOneAndUpdate(
    { username: username1 },
    {
      $set: {
        outgoingFriendRequests: (
          requester.outgoingFriendRequests as unknown as FriendRequest[]
        ).filter(({ to }) => to.toString() !== requested._id.toString()),
      },
    }
  );

  await models.User.findOneAndUpdate(
    { username: username2 },
    {
      $set: {
        incomingFriendRequests: (
          requested.incomingFriendRequests as unknown as FriendRequest[]
        ).filter(({ from }) => from.toString() !== requester._id.toString()),
      },
    }
  );
}
