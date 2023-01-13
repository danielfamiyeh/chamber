import { Router } from 'express';
import { trycatch } from '@danielfamiyeh/chamber-common';

import {
  DeleteServiceRequest,
  GetServiceRequest,
  PutServiceRequest,
} from '../types';
import { ServiceRegistry } from './utils/registry';

export const router = Router()
  .get('/list', (req: GetServiceRequest, res) =>
    trycatch(res, () => {
      if (process.env.NODE_ENV === 'production') {
        throw new Error('Service list is not available in production mode');
      }

      return res.json(ServiceRegistry.services);
    })
  )
  .get('/:service', (req: GetServiceRequest, res) =>
    trycatch(res, () => {
      const { service } = req.params;
      const key = ServiceRegistry.getService(service);

      if (!key) throw new Error(`No ${service} services online`);
      return res.json({ service: key });
    })
  )
  .put('/:service/:port', (req: PutServiceRequest, res) =>
    trycatch(res, () => {
      const { service, port } = req.params;
      const [hostname] = req.headers.host.split(':');
      const key = ServiceRegistry.register(service, hostname, Number(port));

      return res.json({
        service: key,
      });
    })
  )
  .delete('/:service', (req: DeleteServiceRequest, res) =>
    trycatch(res, () => {
      const { service } = req.params;
      const [hostname, port] = req.headers.host.split(':');

      const key = ServiceRegistry.unregister(service, hostname, Number(port));
      return res.json({ service: key });
    })
  );
