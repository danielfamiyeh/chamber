import { ServiceMap, ServiceName } from '../../types';

import { log } from './logger';

export class ServiceRegistry {
  private static services: Record<ServiceName, ServiceMap> = {
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
    const services = ServiceRegistry.services[serviceName];
    const key = ServiceRegistry.key(serviceName, ip, port);
    const now = Date.now();

    if (services && services[key]) {
      services[key].lastHeartbeat = now;
      log('info', `${key} service heartbeat`);
    } else {
      ServiceRegistry.services[serviceName][key] = {
        ip,
        port,
        createdAt: now,
        lastHeartbeat: now,
      };
      log('info', `${key} service added }`);
    }

    return key;
  }

  static unregister(serviceName: ServiceName, ip: string, port: number) {
    const services = ServiceRegistry.services[serviceName];
    const key = ServiceRegistry.key(serviceName, ip, port);

    delete services[key];
  }

  static getService(serviceName: ServiceName) {
    if (!(serviceName && ServiceRegistry.services[serviceName])) {
      throw new Error(`Service ${serviceName} does not exists`);
    }

    const services = Object.entries(ServiceRegistry.services[serviceName]);
    const serviceIdx = Math.floor(Math.random() * services.length);
    const [key] = services[serviceIdx];

    return key;
  }
}
