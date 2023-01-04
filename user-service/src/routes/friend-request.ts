import { Router } from 'express';
import { sendFriendRequest } from '../controllers/friend-request/send-request';

export const friendRequestRouter = Router()
  .put('/', async (req, res) => {
    const { from, to } = req.query;
    await sendFriendRequest(from as string, to as string);

    return res.json({ success: true });
  })
  .patch('/', (req, res) => {});
