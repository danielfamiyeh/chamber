import { serviceMap, loadBalancer } from './constants';
import { Registry, ServiceName } from '../../types';
import { log } from './logger';

export class ServiceRegistry {
  static services: Registry = new Proxy(serviceMap, loadBalancer);

  static key(serviceName: string, ip: string, port: number) {
    return `${serviceName}-${ip}-${port}`;
  }

  static register(serviceName: ServiceName, ip: string, port: number) {
    const services = ServiceRegistry.services[serviceName];
    const key = ServiceRegistry.key(serviceName, ip, port);
    const now = Date.now();

    if (services[key]) {
      services[key].lastHeartbeat = now;
      log('info', `${key} service heartbeat`);
    } else {
      services[key] = { ip, port, createdAt: now, lastHeartbeat: now };
      log('info', `${key} service added }`);
    }

    return key;
  }

  static unregister(serviceName: ServiceName, ip: string, port: number) {
    const services = ServiceRegistry.services[serviceName];
    const key = ServiceRegistry.key(serviceName, ip, port);

    delete services[key];
  }
}
