import { Router } from 'express';

import { acceptFriendRequest } from '../controllers/friend-request/accept-request';
import { rejectFriendRequest } from '../controllers/friend-request/reject-request';
import { sendFriendRequest } from '../controllers/friend-request/send-request';
import { trycatchAsync } from '@danielfamiyeh/chamber-common';

export const friendRequestRouter = Router()
  .put('/', (req, res) =>
    trycatchAsync(res, async () => {
      const { from, to } = req.query;
      await sendFriendRequest(from as string, to as string);

      return res.json({ success: true });
    })
  )
  .patch('/', (req, res) =>
    trycatchAsync(res, async () => {
      const { from, to, action } = req.query;
      await (action === 'accept' ? acceptFriendRequest : rejectFriendRequest)(
        from as string,
        to as string
      );

      return res.json({ success: true });
    })
  );