import { Router } from 'express';
import { requestRouter } from './request';

export const router = Router().use('/request', requestRouter);
