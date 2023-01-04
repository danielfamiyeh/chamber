import { Router } from 'express';

import {
  addFriend,
  acceptFriendRequest,
  rejectFriendRequest,
} from '../controllers/friend';

export const friendRouter = Router()
  .put('/request', addFriend)
  .post('/request', acceptFriendRequest)
  .delete('/request', rejectFriendRequest);
