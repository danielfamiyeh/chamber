import { Router } from 'express';
import { trycatchAsync } from '@danielfamiyeh/chamber-common';

import { createChat } from '../controllers/chat/create-chat';
import { getChat } from '../controllers/chat/get-chat';

export const chatRouter = Router()
  .post('/', (req, res) => trycatchAsync(res, () => getChat(req, res)))
  .put('/', (req, res) => trycatchAsync(res, () => createChat(req, res)));
