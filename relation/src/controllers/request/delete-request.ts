import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { DeleteRelationRequest } from '../../../types';

export const deleteRelationRequest = async (
  req: DeleteRelationRequest,
  res: Response
) => {
  const { _id, requestId } = req.body;

  const user = await models.User.findOne({ _id });

  if (!user) {
    throw new Error('Unable to locate your account');
  }

  const request = await models.RelationRequest.findOne({ _id: requestId });

  if (!request) {
    throw new Error('Unable to locate the request');
  }

  // Remove incoming request
  await models.User.update(
    {
      _id,
    },
    {
      $pull: {
        incomingRelationRequests: requestId,
      },
    }
  );

  // Remove outgoing request
  await models.User.update(
    {
      _id: request.from,
    },
    {
      $pull: {
        outgoingRelationRequest: requestId,
      },
    }
  );

  // Remove request from DB

  await models.RelationRequest.findOneAndDelete({
    _id: requestId,
  });

  return res.json({
    success: true,
  });
};
