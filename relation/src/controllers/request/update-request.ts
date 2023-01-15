import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { UpdateRelationRequest } from '../../../types';

export const updateRelationRequest = async (
  req: UpdateRelationRequest,
  res: Response
) => {
  const { _id, action, requestId } = req.body;

  const user = await models.User.findOne({ _id }).populate(
    'incomingRelationRequests'
  );

  if (!user) {
    throw new Error("Couldn't locate your account");
  }

  if (action === 'accept' || 'reject') {
    const request = user.incomingRelationRequests.find(
      ({ _id: reqId }) => reqId.toString() === requestId
    );
    if (!request) {
      throw new Error("Couldn't perform requested action on the request");
    }

    // Create relations in both directions
    const incomingRelation = new models.Relation({
      type: request.type,
      user: request.from,
    });

    const outgoingRelation = new models.Relation({
      type: request.type,
      user: _id,
    });

    // Whether accepting or rejecting, we want remove the request
    // from both users
    const incomingModifer: Record<string, object> = {
      $pull: {
        incomingRelationRequests: requestId,
      },
    };
    const outgoingModifer: Record<string, object> = {
      $pull: {
        outgoingRelationRequests: requestId,
      },
    };

    if (action === 'accept') {
      // If accepting then we want to save the new relation
      // and push it to both users
      await incomingRelation.save();
      await outgoingRelation.save();

      incomingModifer.$push = {
        relations: incomingRelation._id,
      };

      outgoingModifer.$push = {
        relations: outgoingRelation._id,
      };
    }

    // In any case update both users with their corresponding modifier
    await models.User.findOneAndUpdate({ _id }, incomingModifer);
    await models.User.findOneAndUpdate({ _id: request.from }, outgoingModifer);

    // And delete the request
    await models.RelationRequest.findOneAndDelete({ _id: requestId });

    return res.json({ success: true });
  }

  return res.json({
    error: `The specified action '${action}' is not valid`,
  });
};
