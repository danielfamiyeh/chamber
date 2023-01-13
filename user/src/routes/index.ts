import { Router } from 'express';
import { trycatchAsync } from '@danielfamiyeh/chamber-common';

import { getUser, deleteUser, searchUser } from '../controllers';

export const router = Router()
  .post('/', (req, res) =>
    trycatchAsync(res, async () => {
      const user = await getUser(req.body._id);
      return res.json(user);
    })
  )
  .patch('/', (req, res) =>
    trycatchAsync(res, async () => {
      return res.json({});
    })
  )
  .delete('/', (req, res) =>
    trycatchAsync(res, async () => {
      const success = await deleteUser(req.body._id);
      return res.json({ success });
    })
  )
  .post('/search', (req, res) =>
    trycatchAsync(res, () => searchUser(req, res))
  );
