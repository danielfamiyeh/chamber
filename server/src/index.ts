require('dotenv').config();

import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import { ChatService } from './services/chat';
import { apiRouter } from './routes';
import { log } from './utils/logger';

const PORT = Number(process.env.PORT ?? 4000);

ChatService.createUser('user1');
ChatService.createUser('user2');

const { id: chatId } = ChatService.createChat('user1', 'user2');

const { id: messageId } = ChatService.sendMessage(chatId, 'user1', 'hello');
console.log({ messageId, chatId });
export default express()
  .use(cors())
  .use(bodyParser.json())
  .use('/api', apiRouter)
  .listen(PORT, () =>
    log('info', `Messenger Ultra server listening on port: ${PORT}`)
  );
