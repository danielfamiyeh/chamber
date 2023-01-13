import { Response } from 'express';
import { models } from '@danielfamiyeh/chamber-common/dist/models';

import { SearchUserRequest } from '../../types';

export const searchUser = async (req: SearchUserRequest, res: Response) => {
  const { searchTerm } = req.body ?? {};

  if (!searchTerm) {
    throw new Error('Must provide a username in search query');
  }

  const results = await models.User.find(
    {
      username: new RegExp(String(searchTerm), 'i'),
    },
    'username incomingRelationRequests outgoingRelationRequests relations'
  ).limit(5);

  return res.json({ results });
};
