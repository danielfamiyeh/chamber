import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { CreatePostRequest } from '../../..';

export const createPost = async (req: CreatePostRequest, res: Response) => {
  try {
    const { _id, contentType, contentValue } = req.body;

    const post = new models.Post({ createdBy: _id });
    const content = await models.Content.create({
      relatedCollection: 'post',
      relatedId: post._id,
      type: contentType,
      value: contentValue,
      createdBy: _id,
    });

    post.content = [content];

    await post.save();
    return res.json({ success: true });
  } catch (error) {
    return res.json({ error: error.message });
  }
};
