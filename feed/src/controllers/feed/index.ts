import { Router } from 'express';
import { getFeed } from './get-feed';

export const feedRouter = Router().post('/', getFeed);
