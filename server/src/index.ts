require('dotenv').config();

import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import { users } from './store';
import { apiRouter } from './routes';
import { log } from './utils/logger';
import { UserService } from './services/user/UserService';
import { ChatService } from './services/chat/ChatService';
import { FriendService } from './services/friend/FriendService';

const PORT = Number(process.env.PORT ?? 4000);

UserService.createUser('user1');
UserService.createUser('user2');

FriendService.addFriend('user1', 'user2');

FriendService.acceptRequest('user1', 'user2');

console.log(users.user2);
// ChatService.sendMessage(
//   ChatService.createChat('user1', 'user2').id,
//   'user1',
//   'hello'
// );

export default express()
  .use(cors())
  .use(bodyParser.json())
  .use('/api', apiRouter)
  .listen(PORT, () =>
    log('info', `Messenger Ultra server listening on port: ${PORT}`)
  );
