import { Router } from 'express';
import { trycatch } from '@danielfamiyeh/chamber-common/src';

import {
  DeleteServiceRequest,
  GetServiceRequest,
  PutServiceRequest,
} from '../types';
import { ServiceRegistry } from './utils/registry';

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
  .delete('/:service', (req: DeleteServiceRequest, res) =>
    trycatch(res, () => {
      const { service } = req.params;
      const [hostname, port] = req.headers.host.split(':');

      const key = ServiceRegistry.unregister(service, hostname, Number(port));
      return res.json({ service: key });
    })
  );
