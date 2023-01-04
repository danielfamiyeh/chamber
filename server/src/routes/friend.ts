import { Router } from 'express';

import {
  addFriend,
  acceptFriendRequest,
  rejectFriendRequest,
} from '../controllers/friend';

const friendRequestRouter = Router()
  .post('/', acceptFriendRequest)
  .delete('/', rejectFriendRequest);

export const friendRouter = Router()
  .put('/', addFriend)
  .use('/request', friendRequestRouter);
