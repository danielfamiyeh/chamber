import { Router } from 'express';
import { trycatchAsync } from '@danielfamiyeh/chamber-common';

import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/user';

export const userRouter = Router()
  .post('/', (req, res) =>
    trycatchAsync(res, async () => {
      const user = await getUser(req.body._id);
      return res.json(user);
    })
  )
  .patch('/', (req, res) =>
    trycatchAsync(res, async () => {
      // UPDATE USER
      return res.json({});
    })
  )
  .delete('/', (req, res) =>
    trycatchAsync(res, async () => {
      const success = await deleteUser(req.body._id);
      return res.json({ success });
    })
  );
