import { Response } from 'express';

export const trycatch = (res: Response, fn: Function) => {
  try {
    fn();
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const trycatchAsync = async (res: Response, fn: Function) => {
  try {
    await fn();
  } catch (error) {
    return res.json({ error: error.message });
  }
};
