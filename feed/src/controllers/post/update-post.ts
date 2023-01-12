import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { UpdatePostRequest } from '../../..';

export const updatePost = async (req: UpdatePostRequest, res: Response) => {
  const { userId, postId, post } = req.body;

  const originalPost = await models.Post.findOne({ _id: postId });

  if (!(userId && postId && post)) {
    throw new Error(
      'When updating a post please provide your userId, the postId and content to be updated.'
    );
  }

  if (originalPost.createdBy.toString() !== userId) {
    throw new Error('Cannot update post as you did not create it.');
  }

  const updatedPost = await models.Post.findOneAndUpdate(
    {
      _id: postId,
    },
    {
      $set: post,
    }
  );

  return res.json({ post });
};
