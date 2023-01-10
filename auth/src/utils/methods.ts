import jwt from 'jsonwebtoken';

export const createToken = (_id: string, email: string) =>
  jwt.sign({ _id, email }, String(process.env.JWT_SECRET_KEY));
