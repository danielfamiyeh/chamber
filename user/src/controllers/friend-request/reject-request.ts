import { models } from '@danielfamiyeh/chamber-common/dist/models';
import { FriendRequest } from '@danielfamiyeh/chamber-common';

export async function rejectFriendRequest(
  username1: string,
  username2: string
) {
  const requester = await models.User.findOne({ username: username1 })
    .populate('friends')
    .populate('outgoingRelationRequests')
    .exec();

  const requested = await models.User.findOne({
    username: username2,
  }).populate('incomingRelationRequests');

  if (!(requester && requested)) {
    throw new Error('Trouble fetching user data');
  }

  if (
    !(requested?.incomingRelationRequests as unknown as FriendRequest[]).find(
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
        outgoingRelationRequests: (
          requester.outgoingRelationRequests as unknown as FriendRequest[]
        ).filter(({ to }) => to.toString() !== requested._id.toString()),
      },
    }
  );

  await models.User.findOneAndUpdate(
    { username: username2 },
    {
      $set: {
        incomingRelationRequests: (
          requested.incomingRelationRequests as unknown as FriendRequest[]
        ).filter(({ from }) => from.toString() !== requester._id.toString()),
      },
    }
  );
}
