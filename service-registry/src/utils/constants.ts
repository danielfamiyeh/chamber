import { ServiceName, ServiceMap } from '../../types';

const randInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const serviceMap: Record<ServiceName, ServiceMap> = {
  api: {},
  chat: {},
  friend: {},
  notify: {},
  user: {},
};

export const loadBalancer = {
  get(target: typeof serviceMap, prop: ServiceName) {
    const services = Object.values(target[prop]);
    return services[randInt(0, services.length)];
  },
};
