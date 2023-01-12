import { models } from '@danielfamiyeh/chamber-common/dist/models';

export async function getUser(_id: string) {
  const user = await models.User.findOne({ _id })
    .populate('incomingFriendRequests')
    .populate('outgoingFriendRequests')
    .populate('friends')
    .populate('chats');

  return user;
}
