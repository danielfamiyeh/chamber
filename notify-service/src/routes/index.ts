import { Router } from 'express';
import { trycatchAsync } from '@danielfamiyeh/chamber-common';

import { ListenSSERequest } from '../../types';
import { subscribe } from '../controllers';

export const router = Router().get('/subscribe', (req: ListenSSERequest, res) =>
  trycatchAsync(res, async () => {
    return await subscribe(req, res);
  })
);
