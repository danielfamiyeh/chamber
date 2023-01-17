import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { NotifyService } from '../utils/service';

const getUserContext = (req: Request) => {
  const token = (req.headers.authorization ?? '').replace('Bearer ', '');

  const user = jwt.verify(token, process.env.JWT_SECRET) as {
    _id: string;
    iat: number;
  };

  if (!user?._id) {
    throw new Error('Session has expired. Please sign-out and back in again.');
  }

  return user;
};

export const subscribe = async (req: Request, res: Response) => {
  const { _id } = getUserContext(req);
  const user = await models.User.findOne({ _id });

  if (!user) throw new Error('User does not exist');

  return NotifyService.subscribe(_id, req, res);
};

export const unsubscribe = async (req: Request) => {
  const { _id } = getUserContext(req);

  const user = await models.User.findOne({ _id });
  if (!user) throw new Error('User does not exist');

  return NotifyService.unsubscribe(_id);
};

export const onEvent = async (req: Request) => {
  const { payload } = req.body;

  const { _id } = getUserContext(req);
  const user = await models.User.findOne({ _id });

  if (!user) throw new Error('User does not exist');
  if (!payload) throw new Error('User ID and payload must be provided');

  return NotifyService.onEvent(_id, payload);
};
