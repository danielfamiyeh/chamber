import { Router } from 'express';
import { login, signUp } from '../controllers';

export const router = Router().post('/', login).put('/', signUp);
