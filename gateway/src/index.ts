require('dotenv').config();

import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import { log } from './utils/logger';
import { router } from './routes';

const PORT = Number(process.env.PORT);

export default express()
  .use(cors())
  .use(bodyParser.json())
  .use('/api', router)
  .listen(PORT, () =>
    log(
      'info',
      `Chamber (${process.env.SERVICE_NAME}) listening on port: ${PORT}`
    )
  );
