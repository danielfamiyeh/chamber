import { Request, Response } from 'express';

export const clientStore: Record<string, { req: Request; res: Response }> = {};
