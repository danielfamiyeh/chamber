import { Registry, ServiceName } from '../../types';
import { log } from './logger';

export class ServiceRegistry {
  static services: Registry = {
    api: {},
    chat: {},
    friend: {},
    notify: {},
    user: {},
  };

  static key(serviceName: string, ip: string, port: number) {
    return `${serviceName}-${ip}-${port}`;
  }

  static register(serviceName: ServiceName, ip: string, port: number) {
    const registry = ServiceRegistry.services[serviceName];
    const key = ServiceRegistry.key(serviceName, ip, port);
    const now = Date.now();

    if (registry[key]) {
      registry[key].lastHeartbeat = now;
      log('info', `${key} service heartbeat`);
    } else {
      registry[key] = { ip, port, createdAt: now, lastHeartbeat: now };
      log('info', `${key} service added }`);
    }

    return key;
  }

  static unregister(serviceName: ServiceName, ip: string, port: number) {
    const registry = ServiceRegistry.services[serviceName];
    const key = ServiceRegistry.key(serviceName, ip, port);

    delete registry[key];
  }
}
