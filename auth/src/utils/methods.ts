import jwt from 'jsonwebtoken';

export const createToken = (_id: string, email: string) =>
  jwt.sign({ _id, email }, process.env.JWT_SECRET);
