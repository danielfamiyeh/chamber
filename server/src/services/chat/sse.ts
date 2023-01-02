import { Request, Response } from 'express';

export class SSE {
  static clients: Record<string, { req: Request; res: Response }> = {};
}
