import { Request } from 'express';

export interface CreateRelationRequest extends Request {
  body: {
    _id: string;
    userId: string;
    relationType: string;
  };
}

export interface UpdateRelationRequest extends Request {
  body: {
    _id: string;
    action: string;
    requestId: string;
  };
}

export interface DeleteRelationRequest extends Request {
  body: {
    _id: string;
    requestId: string;
  };
}
