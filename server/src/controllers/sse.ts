import { Request, Response } from 'express';

import { CreateSSERequest } from '../../types';
import { ChatService } from '../services/chat';

export const listenSSE = async (req: Request, res: Response) => {
  const { userId } = (<{ query: { userId: string } }>(<unknown>req)).query;

  const user = ChatService.users[userId];
  const client = ChatService.sse.clients[userId];

  if (!userId) return res.json({ error: 'User ID must be provided' });
  if (!user) return res.json({ error: 'User does not exist' });

  if (client) return res.json({ messages: 'Already listening for events' });

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

  user.chatIds.forEach((chatId) =>
    ChatService.chats[chatId]?.messages?.forEach((message) => {
      res.write(JSON.stringify(message));
      res.write('\n');
    })
  );
};

export const sendMessageSSE = async (req: CreateSSERequest, res: Response) => {
  const { chatId, sender, content } = req.body;

  try {
    ChatService.sendMessage(chatId, sender, content);
    return res.json({ success: true });
  } catch (error) {
    return res.json({ error: error.message });
  }
};
