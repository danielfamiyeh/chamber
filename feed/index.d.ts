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
    post: Pick<Post, '_id' | 'content'>;
    userId: string;
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
