import { Router } from 'express';
import { trycatchAsync } from '@danielfamiyeh/chamber-common';

import { getMessage } from '../controllers/message/get-message';
import { sendMessage } from '../controllers/message/send-message';

export const messageRouter = Router()
  .post('/', (req, res) => trycatchAsync(res, () => getMessage(req, res)))
  .put('/', (req, res) => trycatchAsync(res, () => sendMessage(req, res)));
