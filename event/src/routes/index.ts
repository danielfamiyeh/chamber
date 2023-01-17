import { Request, Response, Router } from 'express';
import { trycatchAsync } from '@danielfamiyeh/chamber-common';

import { onEvent, subscribe, unsubscribe } from '../controllers';

export const router = Router()
  .put('/', (req: Request, res: Response) =>
    trycatchAsync(res, async () => {
      await subscribe(req, res);
    })
  )
  .delete('/', (req: Request, res: Response) =>
    trycatchAsync(res, async () => {
      await unsubscribe(req, res);
    })
  )
  .post('/', (req: Request, res: Response) =>
    trycatchAsync(res, async () => {
      await onEvent(req, res);
    })
  );
