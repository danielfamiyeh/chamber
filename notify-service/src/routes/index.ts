import { Router } from 'express';
import { ListenSSERequest } from '../../types';

import { subscribe } from '../controllers';
import { trycatchAsync } from '../utils/trycatch';

export const router = Router().get('/subscribe', (req: ListenSSERequest, res) =>
  trycatchAsync(res, async () => {
    return await subscribe(req, res);
  })
);
