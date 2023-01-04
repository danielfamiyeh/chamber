import { Router } from 'express';
import { sendFriendRequest } from '../controllers/friend-request/send-request';

export const friendRequestRouter = Router()
  .put('/', (req, res) => {})
  .patch('/', (req, res) => {});
