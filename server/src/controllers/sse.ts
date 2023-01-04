import { Response } from 'express';

import { ListenSSERequest } from '../../types';
import { chats, clients, users } from '../store';

export const listen = async (req: ListenSSERequest, res: Response) => {
  const { userId } = req.query;

  const user = users[userId];
  const client = clients[userId];

  if (!userId) return res.json({ error: 'User ID must be provided' });
  if (!user) return res.json({ error: 'User does not exist' });

  if (client) return res.json({ messages: 'Already listening for events' });

  clients[userId] = { req, res };

  res.set({
    'Cache-Control': 'no-cache',
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive',
  });

  req.on('close', () => {
    delete users[userId];
    // Inform other users of disconnection
  });

  user.chatIds.forEach((chatId) =>
    chats[chatId]?.messages?.forEach((message) => {
      res.write(JSON.stringify(message));
      res.write('\n');
    })
  );
};
