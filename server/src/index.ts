require('dotenv').config();

import cors from 'cors';
import express from 'express';

import SSEChatService from './services/sse';
import { log } from './utils/logger';

const PORT = Number(process.env.PORT ?? 3000);

SSEChatService.createUser('user1');
SSEChatService.createUser('user2');

SSEChatService.createChat('user1', 'user2');

export default express()
  .use(cors())
  .listen(PORT, () =>
    log('info', `Messenger Ultra server listening on port: ${PORT}`)
  );
