import { Router } from 'express';
import { login, signUp, verify } from '../controllers';

export const router = Router()
  .post('/verify', verify)
  .post('/', login)
  .put('/', signUp);
