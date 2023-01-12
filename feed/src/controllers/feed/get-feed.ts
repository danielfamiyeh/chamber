import { Response } from 'express';
import { trycatchAsync } from '@danielfamiyeh/chamber-common';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { GetFeedRequest } from '../../..';

export const getFeed = (req: GetFeedRequest, res: Response) =>
  trycatchAsync(res, async () => {
    const { skip = 0, limit = 10 } = req.query;
    const { _id } = req.body;
    const user = await models.User.findOne({ _id });

    if (!user) throw new Error('Unable to find your account');

    const posts = await models.Post.find({
      createdBy: { $in: [...user.friends, user._id] },
    })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('content')
      .populate('createdBy');

    console.log(posts);

    return res.json({ posts });
  });
