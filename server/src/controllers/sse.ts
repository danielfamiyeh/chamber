import { Request, Response } from 'express';
import { ChatService } from '../services/chat';

export const getSSE = async (req: Request, res: Response) => {
  const { userId } = (<{ query: { userId: string } }>(<unknown>req)).query;

  if (!userId) return res.json({ error: 'User ID must be provided' });

  ChatService.sse.clients[userId] = { req, res };

  res.set({
    'Cache-Control': 'no-cache',
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive',
  });
  res.flushHeaders();

  req.on('close', () => {
    delete ChatService.users[userId];
    // Inform other users of disconnection
  });

  res.write('\n');
};
