require('dotenv').config();

import cors from 'cors';
import express from 'express';

import { ChatService } from './services/chat';
import { apiRouter } from './routes';
import { log } from './utils/logger';

const PORT = Number(process.env.PORT ?? 3000);

ChatService.createUser('user1');
ChatService.createUser('user2');

const { id: chatId } = ChatService.createChat('user1', 'user2');

ChatService.sendMessage(chatId, 'user1', 'Hello');

export default express()
  .use(cors())
  .use('/api', apiRouter)
  .listen(PORT, () =>
    log('info', `Messenger Ultra server listening on port: ${PORT}`)
  );
