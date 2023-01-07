import { Router } from 'express';
import { ListenSSERequest } from '@danielfamiyeh/chamber-common/types';

import { subscribe } from '../controllers';
import { trycatchAsync } from '@danielfamiyeh/chamber-common';

export const router = Router().get('/subscribe', (req: ListenSSERequest, res) =>
  trycatchAsync(res, async () => {
    return await subscribe(req, res);
  })
);
