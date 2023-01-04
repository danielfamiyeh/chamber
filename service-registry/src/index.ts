require('dotenv').config();

import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import { log } from './utils/logger';

const PORT = Number(process.env.PORT ?? 3000);

export default express()
  .use(cors())
  .use(bodyParser.json())
  .listen(PORT, () =>
    log('info', `Chamber (Service Registry) listening on port: ${PORT}`)
  );
