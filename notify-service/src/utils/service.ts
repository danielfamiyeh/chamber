import { Request, Response } from 'express';
import { ClientMap, User } from '../../types';

export class NotifyService {
  static clients: ClientMap = {};

  static subscribe(user: User, req: Request, res: Response) {
    const { clients } = NotifyService;

    if (clients[user._id]) {
      return res.json({ info: 'Already listening for events' });
    }

    clients[user._id] = { req, res };

    res.set({
      'Cache-Control': 'no-cache',
      'Content-Type': 'text/event-stream',
      Connection: 'keep-alive',
    });

    req.on('close', () => {
      delete clients[user._id];
      // TODO: Inform other users of disconnection
    });

    user.chats.forEach((chat) => res.write(JSON.stringify({ chat })));
  }
}
