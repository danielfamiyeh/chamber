import { Router } from 'express';
import { sendMessage } from '../controllers/chat';

export const chatRouter = Router().put('/', sendMessage);
