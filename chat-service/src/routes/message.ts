import { Router } from 'express';

import { getMessage } from '../controllers/message/get-message';
import { sendMessage } from '../controllers/message/send-message';

export const messageRouter = Router()
  .put('/', sendMessage)
  .get('/', getMessage);
