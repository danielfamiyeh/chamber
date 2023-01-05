require('dotenv').config();

import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import { log } from './utils/logger';
import { router } from './routes';

export default express()
  .use(cors())
  .use(bodyParser.json())
  .use('/api', router)
  .listen(process.env.PORT, () => {
    log(
      'info',
      `Chamber (User Service) listening on port: ${process.env.PORT}`
    );
  });
