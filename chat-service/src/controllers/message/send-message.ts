import { Response } from 'express';
import { SendMessageRequest } from '../../../types';

export const sendMessage = (req: SendMessageRequest, res: Response) => {
  return res.json({});
};
