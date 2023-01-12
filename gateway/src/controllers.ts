import axios from 'axios';
import { Response } from 'express';
import { trycatchAsync } from '@danielfamiyeh/chamber-common';

import { keyToUrl } from './utils/methods';
import { ProxyRequest } from '../types';

export const proxyRequest = (req: ProxyRequest, res: Response) =>
  trycatchAsync(res, async () => {
    const { service, method } = req.params;
    const { subpath = '' } = req.query;
    const token = (req.headers.authorization ?? '').replace('Bearer ', '');

    // Fetch service URL from registry
    const { service: serviceKey, error } = (
      await axios.get(`${process.env.REGISTRY_URL}/${service}`)
    ).data;
    if (error) throw new Error(error);

    console.log(req.body);
    // Proxy request to dynamic endpoint
    const { data } = await axios[method](
      keyToUrl(serviceKey, ...subpath.split('/')),
      {
        headers: { Authorization: `Bearer ${token}` },
        ...req.body,
      }
    );

    if (data.error) throw new Error(data.error);
    return res.json(data);
  });
