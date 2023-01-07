import { Response } from 'express';
import { GetPostRequest } from '../..';

export const getPost = (req: GetPostRequest, res: Response) => {
  return res.json({});
};
