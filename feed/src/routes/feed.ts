import { Router } from 'express';
import { getFeed } from '../controllers/feed';

export const feedRouter = Router().post('/', getFeed);
