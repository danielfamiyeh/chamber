import { EVENT_SERVER_URL } from '../../config';

export class EventManager {
  static socket = new WebSocket(EVENT_SERVER_URL);
}
