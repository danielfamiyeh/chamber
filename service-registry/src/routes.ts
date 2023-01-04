import { Router } from 'express';

import { GetServiceRequest, PutServiceRequest } from '../types';
import { ServiceRegistry } from './utils/registry';
import { trycatch } from './utils/trycatch';

export const router = Router()
  .get('/:service', (req: GetServiceRequest, res) =>
    trycatch(res, () => {
      const { service } = req.params;
      const _service = ServiceRegistry.getService(service);

      if (!_service) throw new Error(`No ${service} services online`);
      return res.json({ service: _service });
    })
  )
  .put('/:service', (req: PutServiceRequest, res) =>
    trycatch(res, () => {
      const { service } = req.params;
      const [hostname, port] = req.headers.host.split(':');
      const key = ServiceRegistry.register(service, hostname, Number(port));

      return res.json({
        service: key,
      });
    })
  )
  .delete('/:service', (req, res) => trycatch(res, () => {}));
