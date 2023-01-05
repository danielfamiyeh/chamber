import { LogLevel } from '../../types';

export const log = (level: LogLevel, message: string) =>
  console.log(
    `[${
      process.env.SERVICE_NAME
    } (server) - ${level} - ${new Date().toString()}]: ${message}`
  );
