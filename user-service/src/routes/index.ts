import { Router } from 'express';

import { db } from '../utils/db';
import { userRouter } from './user';
import { friendRequestRouter } from './friend-request';

export const router = Router()
  .use('/user', userRouter)
  .use('/friend-request', friendRequestRouter);
