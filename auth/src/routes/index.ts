import { Router } from 'express';
import { login, signUp, verifyToken } from '../controllers';

export const router = Router()
  .post('/login', login)
  .post('/signUp', signUp)
  .post('/verify-token', verifyToken);
