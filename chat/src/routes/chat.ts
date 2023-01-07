import { Router } from 'express';
import { createChat } from '../controllers/chat/create-chat';
import { getChat } from '../controllers/chat/get-chat';
import { trycatchAsync } from '@danielfamiyeh/chamber-common';

export const chatRouter = Router()
  .get('/', (req, res) => trycatchAsync(res, () => getChat(req, res)))
  .put('/', (req, res) => trycatchAsync(res, () => createChat(req, res)));
