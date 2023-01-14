import { log } from './logger';
import { ServiceMap, ServiceName } from '../../types';

class ServiceRegistry {
  private static _services: Record<ServiceName, ServiceMap> = {
    api: {},
    auth: {},
    chat: {},
    feed: {},
    user: {},
    event: {},
    relation: {},
  };

  static key(serviceName: string, ip: string, port: number) {
    return `${serviceName}@${ip}:${port}`;
  }

  static register(serviceName: ServiceName, hostname: string, port: number) {
    const services = ServiceRegistry._services[serviceName];
    const key = ServiceRegistry.key(serviceName, hostname, port);
    const now = Date.now();

    if (services && services[key]) {
      services[key].lastHeartbeat = now;
      log('info', `${key} heartbeat`);
    } else {
      ServiceRegistry._services[serviceName][key] = {
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
    const services = ServiceRegistry._services[serviceName];
    const key = ServiceRegistry.key(serviceName, hostname, port);

    delete services[key];

    return key;
  }

  static getService(serviceName: ServiceName) {
    if (!(serviceName && ServiceRegistry._services[serviceName])) {
      throw new Error(`Service ${serviceName} does not exists`);
    }

    const services = Object.entries(ServiceRegistry._services[serviceName]);
    if (!services.length) {
      throw new Error(`No ${serviceName} services available`);
    }
    const serviceIdx = Math.floor(Math.random() * services.length);
    const [key] = services[serviceIdx];

    return key;
  }

  /** Returns object with active services */
  static get services() {
    return Object.assign(
      {},
      ...Object.entries(this._services)
        .filter(([, serviceMap]) => Object.values(serviceMap).length)
        .map(([serviceName, serviceMap]) => ({ [serviceName]: serviceMap }))
    );
  }

  static set init(initialConfig: Record<ServiceName, number[]>) {
    Object.entries(initialConfig).forEach(([serviceName, ports]) => {
      ports.forEach((port) =>
        ServiceRegistry.register(<ServiceName>serviceName, 'localhost', port)
      );
    });
  }
}

// Populate registry with development configuration
if (process.env.NODE_ENV !== 'production') {
  const initalConfig = {
    api: [4000],
    chat: [4001],
    auth: [4006],
    feed: [4007],
    user: [4005],
    relation: [4009],
    event: [4003],
  };

  ServiceRegistry.init = initalConfig;
}

export { ServiceRegistry };
