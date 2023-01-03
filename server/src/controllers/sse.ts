import { Response } from 'express';

import { CreateSSERequest, ListenSSERequest } from '../../types';
import { ChatService } from '../services/chat/ChatService';
import { UserService } from '../services/user/UserService';

const { users } = UserService;
const { chats } = ChatService;

export const listenSSE = async (req: ListenSSERequest, res: Response) => {
  const { userId } = req.query;

  const user = users[userId];
  const client = ChatService.clients[userId];

  if (!userId) return res.json({ error: 'User ID must be provided' });
  if (!user) return res.json({ error: 'User does not exist' });

  if (client) return res.json({ messages: 'Already listening for events' });

  ChatService.clients[userId] = { req, res };
  UserService.clients[userId] = { req, res };

  res.set({
    'Cache-Control': 'no-cache',
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive',
  });

  // res.flushHeaders();

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

export const sendMessageSSE = async (req: CreateSSERequest, res: Response) => {
  const { chatId, sender, content } = req.body;

  try {
    ChatService.sendMessage(chatId, sender, content);
    return res.json({ success: true });
  } catch (error) {
    return res.json({ error: error.message });
  }
};
