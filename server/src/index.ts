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

ChatService.sendMessage(
  ChatService.createChat('user1', 'user2').id,
  'user1',
  'hello'
);

export default express()
  .use(cors())
  .use(bodyParser.json())
  .use('/api', apiRouter)
  .listen(PORT, () =>
    log('info', `Messenger Ultra server listening on port: ${PORT}`)
  );
