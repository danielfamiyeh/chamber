import { Response } from 'express';
import { CreatePostRequest } from '../..';

export const createPost = (req: CreatePostRequest, res: Response) => {
  const {
    body: { userId, post },
  } = req;

  return res.json({});
};
