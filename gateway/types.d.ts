import { Request } from 'express';

export interface ProxyRequest extends Request {
  params: {
    path: string;
    data: string;
    method: 'get' | 'put' | 'post' | 'delete';
  };
}
