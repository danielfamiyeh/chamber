import { ServiceMap, ServiceName } from '../../types';
import { log } from './logger';

export class ServiceRegistry {
  private static services: Record<ServiceName, ServiceMap> = {
    api: {},
    auth: {},
    chat: {},
    friend: {},
    notify: {},
    user: {},
  };

  static key(serviceName: string, ip: string, port: number) {
    return `${serviceName}@${ip}:${port}`;
  }

  static register(serviceName: ServiceName, hostname: string, port: number) {
    const services = ServiceRegistry.services[serviceName];
    const key = ServiceRegistry.key(serviceName, hostname, port);
    const now = Date.now();

    if (services && services[key]) {
      services[key].lastHeartbeat = now;
      log('info', `${key} heartbeat`);
    } else {
      ServiceRegistry.services[serviceName][key] = {
        hostname,
        port,
        createdAt: now,
        lastHeartbeat: now,
      };
      log('info', `${key} added to registry`);
    }

    return key;
  }

  static unregister(serviceName: ServiceName, hostname: string, port: number) {
    const services = ServiceRegistry.services[serviceName];
    const key = ServiceRegistry.key(serviceName, hostname, port);

    delete services[key];

    return key;
  }

  static getService(serviceName: ServiceName) {
    if (!(serviceName && ServiceRegistry.services[serviceName])) {
      throw new Error(`Service ${serviceName} does not exists`);
    }

    const services = Object.entries(ServiceRegistry.services[serviceName]);
    if (!services.length) {
      throw new Error(`No ${serviceName} services available`);
    }
    const serviceIdx = Math.floor(Math.random() * services.length);
    const [key] = services[serviceIdx];

    return key;
  }
}
