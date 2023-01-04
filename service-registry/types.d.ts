import { Request } from 'express';

export type LogLevel = 'info' | 'warning' | 'error';

export type ServiceObj = {
  port: number;
  hostname: string;
  createdAt: number;
  lastHeartbeat: number;
};
export type ServiceMap = Record<string, ServiceObj>;
export type ServiceName = 'api' | 'chat' | 'friend' | 'notify' | 'user';
export type Registry = Record<ServiceName, ServiceMap>;

export interface GetServiceRequest extends Request {
  params: {
    service: ServiceName;
  };
}

export type PutServiceRequest = GetServiceRequest;

export type DeleteServiceRequest = GetServiceRequest;