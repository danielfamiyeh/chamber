import { Router } from 'express';
import { getSSE } from '../controllers/sse';

export const sseRouter = Router().get('/', getSSE);
