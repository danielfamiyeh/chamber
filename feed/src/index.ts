require('dotenv').config();

import cors from 'cors';
import axios from 'axios';
import express from 'express';
import bodyParser from 'body-parser';
import { connectDb } from '@danielfamiyeh/chamber-common';

import { log } from './utils/logger';
import { router } from './routes';

export default express()
  .use(cors())
  .use(bodyParser.json({ limit: '15mb' }))
  .use(
    bodyParser.urlencoded({
      extended: true,
      limit: '15mb',
      parameterLimit: 50000,
    })
  )
  .use('/api', router)
  .listen(process.env.PORT, () => {
    connectDb(process.env.DB_URI).then(() => {
      log('info', `Listening on port: ${process.env.PORT}`);
      axios.put(
        `${process.env.REGISTRY_URL}/${process.env.SERVICE_NAME}/${process.env.PORT}`
      );
    });
  });
