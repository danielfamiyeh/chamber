import { Request, Response } from 'express';

export class SSEChatService {
  static clients: Record<string, { req: Request; res: Response }> = {};
}
