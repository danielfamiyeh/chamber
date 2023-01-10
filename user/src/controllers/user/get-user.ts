import { models } from '@danielfamiyeh/chamber-common/dist/models';

export async function getUser(username: string) {
  const user = await models.User.findOne({ username })
    .populate('incomingFriendRequests')
    .populate('outgoingFriendRequests')
    .populate('friends')
    .populate('chats');

  return user;
}
