import { Request, Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { NotifyService } from '../utils/service';

export const subscribe = async (req: Request, res: Response) => {
  const { _id } = req.body;
  if (!_id) throw new Error('User ID must be provided');
  const user = await models.User.findOne({ _id }, '_id');

  if (!user) throw new Error('User does not exist');

  return NotifyService.subscribe(_id, req, res);
};

export const unsubscribe = async (req: Request, res: Response) => {
  const { _id } = req.body;
  if (!_id) throw new Error('User ID must be provided');
  const user = await models.User.findOne({ _id }, '_id');

  if (!user) throw new Error('User does not exist');

  return NotifyService.unsubscribe(_id);
};

export const onEvent = async (req: Request, res: Response) => {
  const { _id, payload } = req.body;

  if (!(_id || payload)) {
    throw new Error('User ID and payload must be provided');
  }
  const user = await models.User.findOne({ _id }, '_id');

  if (!user) throw new Error('User does not exist');

  return NotifyService.onEvent(_id, payload);
};
