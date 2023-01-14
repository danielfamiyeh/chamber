import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { SearchUserRequest } from '../../types';

export const searchUser = async (req: SearchUserRequest, res: Response) => {
  const { searchTerm, skip = 0, limit = 10 } = req.body ?? {};

  if (!searchTerm) {
    throw new Error('Must provide a username in search query');
  }

  const results = await models.User.find(
    {
      username: new RegExp(String(searchTerm), 'i'),
    },
    [
      'username',
      'avatar',
      'incomingRelationRequests',
      'outgoingRelationRequests',
      'relations',
      'chats',
      'createdAt',
    ].join(' ')
  )
    .skip(skip)
    .limit(limit);

  return res.json({ results });
};
