import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { CreateRelationRequest } from '../../../types';

export const createRelationRequest = async (
  req: CreateRelationRequest,
  res: Response
) => {
  const { _id } = req.body;
  const { userId, relationType } = req.query;

  const user = await models.User.findOne({ _id }).populate(
    'outgoingRelationRequests'
  );
  const recipient = await models.User.findOne({ _id: userId }).populate(
    'outgoingRelationRequests'
  );

  if (!user) {
    throw new Error('Could not locate your account');
  }

  if (!recipient) {
    throw new Error("Could not locate the reciepient's account");
  }

  if (user.outgoingRelationRequests.find(({ user }) => user === _id)) {
    throw new Error("You've already sent a request to this user");
  }

  // TODO: Inability to add yourself as a related user

  const request = await models.RelationRequest.create({
    from: _id,
    to: userId,
    type: relationType,
  });

  console.log({ request });

  await models.User.findOneAndUpdate(
    { _id },
    {
      $push: {
        outgoingRelationRequests: request,
      },
    }
  );

  await models.User.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      $push: { incomingRelationRequest: request },
    }
  );

  return res.json({ success: true });
};