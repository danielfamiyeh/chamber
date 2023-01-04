require('dotenv').config();

import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import { apiRouter } from './routes';
import { log } from './utils/logger';

const PORT = Number(process.env.PORT ?? 3000);

export default express()
  .use(cors())
  .use(bodyParser.json())
  .use('/api', apiRouter)
  .listen(PORT, () =>
    log('info', `Messenger Ultra server listening on port: ${PORT}`)
  );
