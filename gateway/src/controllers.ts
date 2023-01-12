import axios from 'axios';
import jwt from 'jsonwebtoken';
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

    // Auth service routes dont'r require authentication
    // All other routes do
    const authPayload =
      service === 'auth' ? {} : jwt.verify(token, process.env.JWT_SECRET);

    // Proxy request to dynamic endpoint
    const { data } = await axios[method](
      keyToUrl(serviceKey, ...subpath.split('/')),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        ...req.body,
        ...Object(authPayload),
        data: { ...req.body, ...Object(authPayload) },
      }
    );

    if (data.error) throw new Error(data.error);
    return res.json(data);
  });
