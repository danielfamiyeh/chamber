import { Router } from 'express';

import { getPost } from './get-post';
import { createPost } from './create-post';
import { deletePost } from './delete-post';
import { updatePost } from './update-post';

export const postRouter = Router()
  .get('/', getPost)
  .put('/', createPost)
  .patch('/', updatePost)
  .delete('/', deletePost);
