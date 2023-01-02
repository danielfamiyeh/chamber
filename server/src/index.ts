require('dotenv').config();

import cors from 'cors';
import express from 'express';

import { ChatService } from './services/chat';
import { log } from './utils/logger';

const PORT = Number(process.env.PORT ?? 3000);

ChatService.createUser('user1');
ChatService.createUser('user2');

ChatService.createChat('user1', 'user2');

export default express()
  .use(cors())
  .listen(PORT, () =>
    log('info', `Messenger Ultra server listening on port: ${PORT}`)
  );
