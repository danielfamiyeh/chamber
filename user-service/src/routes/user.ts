import { Router } from 'express';
import { createUser } from '../controllers/user/create-user';
import { getUser } from '../controllers/user/get-user';
import { trycatchAsync } from '@danielfamiyeh/chamber-common/src/utils';

export const userRouter = Router()
  .get('/', (req, res) =>
    trycatchAsync(res, async () => {
      const { username } = req.query;

      const user = await getUser(username as string);
      return res.json({ user });
    })
  )
  .put('/', (req, res) =>
    trycatchAsync(res, async () => {
      const { username } = req.query;

      const user = await createUser(username as string);
      return res.json({ user });
    })
  )
  .delete('/', (req, res) =>
    trycatchAsync(res, () => {
      return res.json({});
    })
  );
