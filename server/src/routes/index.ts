import { Router } from 'express';

import { sseRouter } from './sse';
import { chatRouter } from './chat';
import { userRouter } from './user';

export const apiRouter = Router()
  .use('/sse', sseRouter)
  .use('/user', userRouter)
  .use('/chat', chatRouter);
