import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { CreateRelationRequest } from '../../../types';

export const createRelationRequest = async (
  req: CreateRelationRequest,
  res: Response
) => {
  const { _id, userId, relationType } = req.body;

  const user = await models.User.findOne({ _id }).populate([
    { path: 'outgoingRelationRequests', model: 'relationrequest' },
    { path: 'relations', model: 'relation' },
  ]);
  const recipient = await models.User.findOne({ _id: userId }).populate(
    'outgoingRelationRequests'
  );
  const existingRelation = user.relations.find(
    ({ user }) => user.toString() === userId
  );

  if (!user) {
    throw new Error('Could not locate your account');
  }

  if (!recipient) {
    throw new Error("Could not locate the reciepient's account");
  }

  if (existingRelation) {
    throw new Error(`This user is already your ${existingRelation.type}`);
  }

  if (
    user.outgoingRelationRequests.find(({ to }) => to.toString() === userId)
  ) {
    throw new Error("You've already sent a request to this user");
  }

  const request = await models.RelationRequest.create({
    from: _id,
    to: userId,
    type: relationType,
  });

  await models.User.findOneAndUpdate(
    { _id },
    {
      $push: {
        outgoingRelationRequests: request._id,
      },
    }
  );

  await models.User.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      $push: { incomingRelationRequests: request._id },
    }
  );

  return res.json({ success: true });
};
