import { Router } from 'express';
import {
  getPost,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/post';

export const postRouter = Router()
  .get('/', getPost)
  .put('/', createPost)
  .patch('/', updatePost)
  .delete('/', deletePost);
