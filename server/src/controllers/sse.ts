import { Request, Response } from 'express';

import { CreateSSERequest } from '../../types';
import { ChatService } from '../services/chat';

export const listenSSE = async (req: Request, res: Response) => {
  const { userId } = (<{ query: { userId: string } }>(<unknown>req)).query;

  if (!userId) return res.json({ error: 'User ID must be provided' });
  if (!ChatService.users[userId])
    return res.json({ error: 'User does not exist' });

  if (ChatService.sse.clients[userId])
    return res.json({ messages: 'Already listening for events' });

  ChatService.sse.clients[userId] = { req, res };

  res.set({
    'Cache-Control': 'no-cache',
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive',
  });

  // res.flushHeaders();

  req.on('close', () => {
    delete ChatService.users[userId];
    // Inform other users of disconnection
  });

  res.write('\n');
};

export const sendMessageSSE = async (req: CreateSSERequest, res: Response) => {
  const { chatId, senderId, content } = req.body;

  try {
    ChatService.sendMessage(chatId, senderId, content);
    return res.json({ success: true });
  } catch (error) {
    return res.json({ error: error.message });
  }
};
