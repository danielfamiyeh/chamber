import { Router } from 'express';

import { sseRouter } from './sse';
import { chatRouter } from './chat';
import { userRouter } from './user';
import { friendRouter } from './friend';

export const apiRouter = Router()
  .use('/friend', friendRouter)
  .use('/user', userRouter)
  .use('/chat', chatRouter)
  .use('/sse', sseRouter);
