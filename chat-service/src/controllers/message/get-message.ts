import { Response } from 'express';
import { GetMessageRequest } from '../../../types';

export const getMessage = (req: GetMessageRequest, res: Response) => {
  return res.json({});
};
