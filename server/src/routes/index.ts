import { Router } from 'express';

import { sseRouter } from './sse';
import { socketRouter } from './websocket';

export const apiRouter = Router()
  .use('/sse', sseRouter)
  .use('/socket', socketRouter);
