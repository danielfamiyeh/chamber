import { Response } from 'express';
import { User } from '@danielfamiyeh/chamber-common/types';
import { models } from '@danielfamiyeh/chamber-common/src';

import { NotifyService } from '../utils/service';
import { ListenSSERequest } from '../../types';

export const subscribe = async (req: ListenSSERequest, res: Response) => {
  const { userId } = req.query;
  const user = await models.User.findOne({ _id: userId })
    .populate({
      path: 'chats.messages',
      model: 'Message',
    })
    .exec();

  if (!userId) return res.json({ error: 'User ID must be provided' });
  if (!user) return res.json({ error: 'User does not exist' });

  return NotifyService.subscribe(<User>(<unknown>user), req, res);
};
