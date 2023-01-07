import { Response } from 'express';
import { LoginRequest } from '../../types';

export const login = (req: LoginRequest, res: Response) => {
  return res.json({});
};
