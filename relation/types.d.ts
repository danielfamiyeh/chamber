import { Request } from 'express';

export interface CreateRelationRequest extends Request {
  body: {
    _id: string;
  };
}
export type UpdateRelationRequest = CreateRelationRequest;
export type DeleteRelationRequest = CreateRelationRequest;
