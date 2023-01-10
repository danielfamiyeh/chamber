import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { createToken } from '../utils/methods';
import { SignUpRequest } from '../../types';

export const signUp = async (req: SignUpRequest, res: Response) => {
  const { username, password } = req.body;

  const userExists = await models.User.findOne({ username });

  if (userExists) {
    return res.json({ error: 'That username has been taken' });
  }

  const user = await models.User.create({
    username,
    password,
  });

  return res.json({ _id: user._id, token: createToken(user._id, user.email) });
};
