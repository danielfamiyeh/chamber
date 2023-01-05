import { Request, Response } from 'express';

export interface ListenSSERequest extends Request {
  query: {
    userId: string;
  };
}

export type ClientMap = Record<string, { req: Request; res: Response }>;
