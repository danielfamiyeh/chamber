import { Request } from 'express';
import { Post } from '@danielfamiyeh/chamber-common';

export interface GetPostRequest extends Request {
  body: {
    postId: string;
    userId: string;
  };
}

export interface CreatePostRequest extends Request {
  body: {
    _id: string;
    contentType: string;
    contentValue: string;
  };
}

export interface UpdatePostRequest extends Request {
  body: {
    postId: string;
    userId: string;
    post: Partial<Post>;
  };
}

export type DeletePostRequest = GetPostRequest;

export interface GetFeedRequest extends Request {
  query: {
    skip: string;
    limit: string;
  };
}
