import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { trycatch } from '@danielfamiyeh/chamber-common';

export const verify = (req: Request, res: Response) =>
  trycatch(res, () => {
    const token = (req.headers.authorization ?? '').replace('Bearer ', '');
    if (!token) {
      return res.status(404).json({
        error: 'You are not authorized to access the requested resource',
      });
    }

    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return res.json({ user });
  });
