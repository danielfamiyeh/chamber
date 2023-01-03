import { Router } from 'express';
import { listen } from '../controllers/sse';

export const sseRouter = Router().get('/', listen);
