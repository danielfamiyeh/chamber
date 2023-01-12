import { Router } from 'express';
import { feedRouter, postRouter } from '../controllers';

export const router = Router()
  .use('/feed', feedRouter)
  .use('/post', postRouter);
