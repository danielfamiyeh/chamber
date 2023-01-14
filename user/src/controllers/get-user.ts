import { models } from '@danielfamiyeh/chamber-common/dist/models';

export async function getUser(_id: string) {
  const user = await models.User.findOne({ _id })
    .populate({
      path: 'incomingRelationRequests',
      populate: {
        path: 'from',
        model: 'user',
      },
    })
    .populate({
      path: 'outgoingRelationRequests',
      populate: {
        path: 'to',
        model: 'user',
      },
    })
    .populate('relations')
    .populate('chats');

  return user;
}
