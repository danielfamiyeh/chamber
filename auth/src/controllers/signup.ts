import { Response } from 'express';
import { SignUpRequest } from '../../types';

export const signUp = (req: SignUpRequest, res: Response) => {
  return res.json({});
};
