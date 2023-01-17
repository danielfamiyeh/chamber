import { Request, Response } from 'express';

export type ClientMap = Record<string, { req: Request; res: Response }>;
