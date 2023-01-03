import { Response } from 'express';

import { createToken } from '../utils/auth';
import { UserService } from '../services/user';
import { CreateUserRequest, GetUserRequest } from '../../types';

export const createUser = (req: CreateUserRequest, res: Response) => {
  const { username } = req.body;
  const user = UserService.createUser(username);
  const token = createToken(user);

  try {
    return res.json({ user, session: { id: user.id, token } });
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
          ? UserService.users[username]
          : Object.values(UserService.users).find(
              (user) => user.id === userId
            )) ?? null,
    });
  } catch (error) {
    return res.json({ error: error.message });
  }
};
