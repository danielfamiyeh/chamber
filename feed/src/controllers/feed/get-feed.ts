import { Response } from 'express';
import { GetFeedRequest } from '../../..';

export const getFeed = (req: GetFeedRequest, res: Response) => {
  const { start = 0, end = 10 } = req.query;
  const { _id } = req.body;

  return res.json({ feed: [] });
};
