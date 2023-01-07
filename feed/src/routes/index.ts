import { Router } from 'express';
import { trycatchAsync } from '@danielfamiyeh/chamber-common';

import { createPost, deletePost, getPost, updatePost } from '../controllers';

export const router = Router()
  .get('/', (req, res) => trycatchAsync(res, () => getPost(req, res)))
  .put('/', (req, res) => trycatchAsync(res, () => createPost(req, res)))
  .patch('/', (req, res) => trycatchAsync(res, () => updatePost(req, res)))
  .delete('/', (req, res) => trycatchAsync(res, () => deletePost(req, res)));
