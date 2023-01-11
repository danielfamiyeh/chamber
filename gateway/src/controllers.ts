import _axios from 'axios';
import { Response } from 'express';
import { trycatchAsync } from '@danielfamiyeh/chamber-common';

import { ProxyRequest } from '../types';

const axios = _axios.create({
  baseURL: process.env.REGISTRY_URL,
});

export const proxyRequest = (req: ProxyRequest, res: Response) =>
  trycatchAsync(res, async () => {
    const { path } = req.params;
    const [service, ...subpaths] = path.split('/');

    const authServiceKey = (await axios.get('/auth')).data;

    if (service === 'auth') {
      const { service: _service, error } = (await axios.get(`/${service}`))
        .data;
      return res.json({});
      // return res.json(error ? { error } : { service: _service });
    } else {
      // // Check bearer token
      // const { authorization = '' } = req.headers;
      // const token = authorization.replace('Bearer ', '');
      // const verification = await axios.get(`/`);
    }
  });
