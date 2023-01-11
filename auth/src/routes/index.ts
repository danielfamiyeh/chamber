import { Router } from 'express';
import { login, signUp, verify } from '../controllers';

export const router = Router()
  .get('/', verify)
  .post('/', login)
  .put('/', signUp);
