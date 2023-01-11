import { Request } from 'express';

export interface ProxyRequest extends Request {
  params: {
    service: string;
    method: 'get' | 'put' | 'post' | 'delete';
  };
  query: {
    subpath: string;
  };
}
