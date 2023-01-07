import { Request } from 'express';

export interface LoginRequest extends Request {
  body: { username: string; password: string };
}

export interface SignUpRequest extends Request {
  body: { username: string; password: string };
}
