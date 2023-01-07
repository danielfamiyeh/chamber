import { Response } from 'express';
import { DeletePostRequest } from '../..';

export const deletePost = (req: DeletePostRequest, res: Response) => {
  return res.json({});
};
