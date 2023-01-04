import { LogLevel } from '../../types';

export const log = (level: LogLevel, message: string) =>
  console.log(`[server - ${level} - ${new Date().toString()}]: ${message}`);
