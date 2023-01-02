import { Router } from 'express';
import { listenSSE, sendMessageSSE } from '../controllers/sse';

export const sseRouter = Router().get('/', listenSSE).put('/', sendMessageSSE);
