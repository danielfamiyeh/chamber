import { models } from '@danielfamiyeh/chamber-common/dist/models';

export async function getUser(_id: string) {
  const user = await models.User.findOne({ _id }).populate([
    {
      path: 'outgoingRelationRequests',
      model: 'relationrequest',
      populate: [
        {
          path: 'from',
          model: 'user',
          select: '_id username',
        },
        {
          path: 'to',
          model: 'user',
          select: '_id username',
        },
      ],
    },
    {
      path: 'incomingRelationRequests',
      model: 'relationrequest',
      populate: [
        {
          path: 'from',
          model: 'user',
          select: '_id username',
        },
        {
          path: 'to',
          model: 'user',
          select: '_id username',
        },
      ],
    },
  ]);

  return user;
}
