import { Response } from 'express';
import { GetChatRequest } from '../../../types';

export const getChat = (req: GetChatRequest, res: Response) => {
  return res.json({});
};
