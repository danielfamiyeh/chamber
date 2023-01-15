import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { SearchUserRequest } from '../../types';

export const searchUser = async (req: SearchUserRequest, res: Response) => {
  const { _id, searchTerm, skip = 0, limit = 10 } = req.body ?? {};

  if (!searchTerm) {
    throw new Error('Must provide a username in search query');
  }

  const query = {
    _id: { $ne: _id },
    username: new RegExp(String(searchTerm), 'i'),
  };

  const numTotalRecords = await models.User.find(query).count();
  const results = await models.User.find(
    query,
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

  return res.json({ results, numTotalRecords });
};
