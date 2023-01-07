import { LogLevel } from '../../types';

export const log =
  (serviceName: string) => (level: LogLevel, message: string) =>
    console.log(
      `[${serviceName} (server) - ${level} - ${new Date().toString()}]: ${message}`
    );
