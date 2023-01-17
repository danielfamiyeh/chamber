import { Request, Response } from 'express';

import { ClientMap } from '../../types';
import { log } from './logger';

export class NotifyService {
  static clients: ClientMap = {};

  static subscribe(userId: string, req: Request, res: Response) {
    if (NotifyService.clients[userId]) {
      throw new Error('Already listening for events');
    }

    NotifyService.clients[userId] = { req, res };

    res.set({
      'Cache-Control': 'no-cache',
      'Content-Type': 'text/event-stream',
      Connection: 'keep-alive',
    });

    log('info', `Client ${userId} has connected`);

    req.on('close', () => {
      delete NotifyService.clients[userId];
      log('info', `Client ${userId} has disconnected`);
    });
  }

  static unsubscribe(userId: string) {
    const client = NotifyService.clients[userId];
    if (!client) throw new Error('No client found for this user');

    client.res.end();
  }

  static onEvent(userId: string, payload: string) {
    const client = NotifyService.clients[userId];

    if (!client) throw new Error('No client found for this user');

    client.res.write(`data:${JSON.stringify(payload)}`);
    client.res.write('\n\n');

    log('info', `Event ${payload} sent to client ${userId}`);
  }
}
