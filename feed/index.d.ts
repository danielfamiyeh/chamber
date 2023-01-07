import { Request } from 'express';

export interface GetPostRequest extends Request {
  query: {
    postId: string;
  };
}

// export interface CreatePostRequest extends Request {
//   body:
// }

export type DeletePostRequest = GetPostRequest;
