require('dotenv').config();

import cors from 'cors';
import axios from 'axios';
import express from 'express';
import bodyParser from 'body-parser';

import { log } from './utils/logger';
import { router } from './routes';

export default express()
  .use(cors())
  .use(bodyParser.json())
  .use('/api', router)
  .listen(process.env.PORT, () => {
    log('info', `Listening on port: ${process.env.PORT}`);
    axios.put(`${process.env.REGISTRY_URL}/${process.env.SERVICE_NAME}`);
  });
