import { Response } from 'express';
import { CreatePostRequest } from '../..';

export const createPost = (req: CreatePostRequest, res: Response) => {
  return res.json({});
};
