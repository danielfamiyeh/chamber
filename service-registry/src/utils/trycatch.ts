import { Response } from 'express';

export const trycatch = (res: Response, fn: Function) => {
  try {
    fn();
  } catch (error) {
    return res.json({ error: error.message });
  }
};
