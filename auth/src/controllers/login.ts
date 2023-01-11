import { Response } from 'express';
import { trycatchAsync } from '@danielfamiyeh/chamber-common';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { LoginRequest } from '../../types';
import { createToken } from '../utils/methods';

export const login = async (req: LoginRequest, res: Response) =>
  trycatchAsync(res, async () => {
    const { username, password } = req.body;
    const user = await models.User.findOne({ username });

    if (!user) {
      return res.json({ error: 'Incorrect username or password' });
    }

    const isValid = await user.validatePassword(password);

    if (!isValid) {
      return res.json({ error: 'Incorrect username or password' });
    }

    const session = { _id: user._id, token: createToken(user._id, user.email) };
    return res.json(session);
  });
