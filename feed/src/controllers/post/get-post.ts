import { Response } from 'express';
import { User } from '@danielfamiyeh/chamber-common';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { GetPostRequest } from '../../..';

/**
 * Fetch post from db
 *
 * @param {GetPostRequest} req Client request
 * @param {Response} res Server response
 * @returns
 */
export const getPost = async (req: GetPostRequest, res: Response) => {
  // Check that user is friends with the post creator

  const { postId, userId } = req.body;

  const post = await models.Post.findOne({ _id: postId })
    .populate({
      path: 'createdBy.relations',
    })
    .populate({ path: 'createdBy.username' })
    .populate('content');

  if (
    !(<User>(<unknown>post.createdBy)).relations
      .map((friendId) => friendId.toString())
      .includes(userId)
  ) {
    throw new Error('Cannot fetch post, you have no relation to the creator');
  }

  return res.json({ post });
};
