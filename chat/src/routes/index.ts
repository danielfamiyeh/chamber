import { Router } from 'express';

import { messageRouter } from './message';
import { chatRouter } from './chat';

export const router = Router()
  .use('/chat', chatRouter)
  .use('/message', messageRouter);
