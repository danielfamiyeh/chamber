import { Response } from 'express';
import { CreateUserRequest } from '../../types';
import { ChatService } from '../services/chat';

export const createUser = (req: CreateUserRequest, res: Response) => {
  const { username } = req.query;
  try {
    return res.json(ChatService.createUser(username));
  } catch (error) {
    return res.json({ error: error.message });
  }
};
