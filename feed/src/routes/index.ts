import { Router } from 'express';

import { feedRouter } from './feed';
import { postRouter } from './posts';

export const router = Router()
  .use('/feed', feedRouter)
  .use('/post', postRouter);
