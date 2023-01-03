import { Router } from 'express';
import { createUser, getUser } from '../controllers/user';

export const userRouter = Router()
  .get('/', getUser)
  .put('/', createUser)
  .put('/friend');
