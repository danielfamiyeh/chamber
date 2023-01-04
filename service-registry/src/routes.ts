import { Router } from 'express';

import { ServiceRegistry } from './utils/registry';
import { GetServiceRequest } from '../types';
import { trycatch } from './utils/trycatch';

export const router = Router()
  .get('/:service', (req: GetServiceRequest, res) => {
    trycatch(res, () => {
      const { service } = req.params;
      if (!(service && service in ServiceRegistry.services)) {
        throw new Error(`Service ${service} does not exist`);
      }

      const _service = ServiceRegistry.services[service];

      if (!_service) throw new Error(`No ${service} services online`);

      return res.json({ service: _service });
    });
  })
  .put('/', (req, res) => {})
  .delete('/', (req, res) => {});
