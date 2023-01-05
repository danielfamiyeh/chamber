import { LogLevel } from '../../types';

export const log = (level: LogLevel, message: string) =>
  console.log(
    `[${
      process.env.APP_NAME
    } (server) - ${level} - ${new Date().toString()}]: ${message}`
  );
