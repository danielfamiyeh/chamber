import { Router } from 'express';
import { createUser } from '../controllers/user/create-user';
import { getUser } from '../controllers/user/get-user';
import { trycatchAsync } from '../utils/trycatch';

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
