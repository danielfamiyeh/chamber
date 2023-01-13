import { Request } from 'express';

export interface SearchUserRequest extends Request {
  query: { username: string };
}
