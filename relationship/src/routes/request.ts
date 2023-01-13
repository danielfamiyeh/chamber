import { Router } from 'express';
import { trycatchAsync } from '@danielfamiyeh/chamber-common';

import {
  createRelationRequest,
  deleteRelationRequest,
  updateRelationRequest,
} from '../controllers/request';

export const requestRouter = Router()
  .put('/', (req, res) =>
    trycatchAsync(res, () => createRelationRequest(req, res))
  )
  .post('/', (req, res) =>
    trycatchAsync(res, () => updateRelationRequest(req, res))
  )
  .delete('/', (req, res) =>
    trycatchAsync(res, () => deleteRelationRequest(req, res))
  );
