import { Router } from 'express';
import { proxyRequest } from './controllers';

export const router = Router().post('/:service/:method', proxyRequest);
