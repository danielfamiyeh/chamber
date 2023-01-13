import { Request } from 'express';

export type LogLevel = 'info' | 'warning' | 'error';

export type ServiceObj = {
  port: number;
  hostname: string;
  createdAt: number;
  lastHeartbeat: number;
};
export type ServiceName =
  | 'api'
  | 'chat'
  | 'feed'
  | 'friend'
  | 'notify'
  | 'user'
  | 'friend'
  | 'auth';
export type ServiceMap = Record<string, ServiceObj>;
export type Registry = Record<ServiceName, ServiceMap>;

export interface GetServiceRequest extends Request {
  params: {
    service: ServiceName;
  };
}

export interface PutServiceRequest extends Request {
  params: {
    service: ServiceName;
    port: string;
  };
}

export type DeleteServiceRequest = GetServiceRequest;
