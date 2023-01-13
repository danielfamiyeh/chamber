import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { SearchUserRequest } from '../../types';

export const searchUser = async (req: SearchUserRequest, res: Response) => {
  const { username } = req.query ?? {};

  if (!username) {
    throw new Error('Must provide a username in search query');
  }

  const results = await models.User.find({
    username: new RegExp(String(username), 'i'),
  });

  return res.json({ results });
};
