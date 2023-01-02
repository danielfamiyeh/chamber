import { Router } from 'express';
import { createUser } from '../controllers/user';

export const userRouter = Router().put('/', createUser);
