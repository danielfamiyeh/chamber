import { models } from '@danielfamiyeh/chamber-common/dist/models';

export async function getUser(_id: string) {
  const user = await models.User.findOne({ _id })
    .populate('incomingRelationRequests')
    .populate('outgoingRelationRequests')
    .populate('friends')
    .populate('chats');

  return user;
}
