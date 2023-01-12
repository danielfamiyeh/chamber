import { Router } from 'express';
import { getUser } from '../controllers/user/get-user';
import { createUser } from '../controllers/user/create-user';
import { trycatchAsync } from '@danielfamiyeh/chamber-common';

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
    trycatchAsync(res, () => {
      return res.json({});
    })
  );
