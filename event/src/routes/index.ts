import { Request, Response, Router } from 'express';
import { trycatchAsync } from '@danielfamiyeh/chamber-common';

import { onEvent, subscribe, unsubscribe } from '../controllers';

export const router = Router()
  .get('', (req: Request, res: Response) =>
    trycatchAsync(res, async () => await subscribe(req, res))
  )
  .delete('/', (req: Request, res: Response) =>
    trycatchAsync(res, async () => {
      await unsubscribe(req);
    })
  )
  .post('/', (req: Request, res: Response) =>
    trycatchAsync(res, async () => {
      await onEvent(req);
    })
  );
