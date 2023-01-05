import { Response } from 'express';
import { CreateChatRequest } from '../../../types';

export const createChat = (req: CreateChatRequest, res: Response) => {
  return res.json({});
};
