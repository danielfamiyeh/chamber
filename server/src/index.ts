require('dotenv').config();

import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import { ChatService } from './services/chat';
import { UserService } from './services/user';
import { apiRouter } from './routes';
import { log } from './utils/logger';

const PORT = Number(process.env.PORT ?? 4000);

UserService.createUser('user1');
UserService.createUser('user2');

ChatService.sendMessage(
  ChatService.createChat('user1', 'user2').id,
  'user1',
  'hello'
);

console.log(ChatService);
export default express()
  .use(cors())
  .use(bodyParser.json())
  .use('/api', apiRouter)
  .listen(PORT, () =>
    log('info', `Messenger Ultra server listening on port: ${PORT}`)
  );
