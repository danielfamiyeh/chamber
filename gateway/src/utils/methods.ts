import { protocol } from './constants';

export const keyToService = (key: string) => {
  const [serviceName, host] = key.split('@');
  const [hostname, port] = host.split(':');
  return { serviceName, hostname, port };
};

export const keyToUrl = (key: string, ...subpaths: string[]) => {
  const { hostname, port } = keyToService(key);
  return `${protocol}://${hostname}:${port}/api/${subpaths.join('/')}`;
};
