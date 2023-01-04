import { Router } from 'express';
import { addFriend } from '../controllers/friend';

export const friendRouter = Router().put('/request', addFriend);
