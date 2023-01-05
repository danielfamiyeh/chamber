import { Router } from 'express';

import { getMessage } from '../controllers/message/get-message';
import { sendMessage } from '../controllers/message/send-message';
import { trycatchAsync } from '../utils/trycatch';

export const messageRouter = Router()
  .get('/', (req, res) => trycatchAsync(res, () => getMessage(req, res)))
  .put('/', (req, res) => trycatchAsync(res, () => sendMessage(req, res)));
