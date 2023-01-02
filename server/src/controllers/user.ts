import { Response } from 'express';

import { ChatService } from '../services/chat';
import { CreateUserRequest, GetUserRequest } from '../../types';

export const createUser = (req: CreateUserRequest, res: Response) => {
  const { username } = req.query;
  try {
    return res.json(ChatService.createUser(username));
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const getUser = (req: GetUserRequest, res: Response) => {
  const { username, userId } = req.query;

  if (!(username || userId)) {
    throw new Error('Username or user ID must be defined in query');
  }

  try {
    return res.json({
      user:
        (username
          ? ChatService.users[username]
          : Object.values(ChatService.users).find(
              (user) => user.id === userId
            )) ?? null,
    });
  } catch (error) {
    return res.json({ error: error.message });
  }
};
