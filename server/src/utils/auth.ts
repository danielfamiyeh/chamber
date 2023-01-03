import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import { User } from '../../types';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;

export const getCurrentUser = async (req: Request, res: Response) => {
  const token = (req.headers.authorization ?? '').replace('Bearer ', '');

  if (!token) return res.json({ error: 'Unauthorized request.' });
  try {
    return jwt.verify(token, JWT_SECRET_KEY) as any;
  } catch (error) {
    res.json({ error: 'Your session has expired. Please sign in again' });
  }
};

export const createToken = ({ id, username }: User) =>
  jwt.sign({ id, username }, JWT_SECRET_KEY);
