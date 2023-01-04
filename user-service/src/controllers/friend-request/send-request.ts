import { FriendRequest } from '../../../types';
import { models } from '../../models';
import { db } from '../../utils/db';

export async function sendFriendRequest(username1: string, username2: string) {
  const requester = await models.User.findOne({ username: username1 })
    .populate('friends')
    .populate('outgoingFriendRequests')
    .exec();

  const requested = await models.User.findOne({ username: username2 });

  if (!(requester && requested)) {
    throw new Error('Trouble fetching user data');
  }

  if (
    (requester.outgoingFriendRequests as unknown as FriendRequest[]).find(
      ({ to }) => to === username2
    )
  ) {
    throw new Error(`Already sent a request to ${username2}`);
  }

  const doc = await models.FriendRequest.create({
    from: requester._id,
    to: requested._id,
  });

  return doc;
}
