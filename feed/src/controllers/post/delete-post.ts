import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { DeletePostRequest } from '../../..';

export const deletePost = async (req: DeletePostRequest, res: Response) => {
  const { postId, userId } = req.body;

  const post = await models.Post.findOne({ _id: postId });

  if (!(postId && userId)) {
    throw new Error(
      'When deleting post please provide your userId and the postId'
    );
  }

  if (post.createdBy.toString() !== userId) {
    throw new Error('Cannot delete post as you did not create it');
  }

  const success = await models.Post.findOneAndDelete({ _id: postId });
  return res.json({ success: !!success });
};
