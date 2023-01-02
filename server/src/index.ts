require('dotenv').config();

import cors from 'cors';
import express from 'express';

import { log } from './utils/logger';

const PORT = Number(process.env.PORT ?? 3000);

export default express()
  .use(cors())
  .listen(PORT, () =>
    log('info', `Messenger Ultra server listening on port: ${PORT}`)
  );
