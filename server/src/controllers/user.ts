import { Response } from 'express';

import { createToken, getCurrentUser } from '../utils/auth';
import { UserService } from '../services/user/UserService';
import {
  AddFriendRequest,
  CreateUserRequest,
  GetUserRequest,
} from '../../types';

const { users } = UserService;

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
          ? users[username]
          : Object.values(users).find((user) => user.id === userId)) ?? null,
    });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const addFriend = async (req: AddFriendRequest, res: Response) => {
  try {
    const { username } = await getCurrentUser(req, res);
    UserService.addFriend(username, req.body.username);

    return res.json({ success: true });
  } catch (error) {
    return res.json({ error: error.message });
  }
};
