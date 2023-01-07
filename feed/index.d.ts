import { Request } from 'express';
import { Post } from '@danielfamiyeh/chamber-common';

export interface GetPostRequest extends Request {
  query: {
    postId: string;
  };
}

export interface CreatePostRequest extends Request {
  body: Omit<Post, '_id'>;
}

export interface UpdatePostRequest extends Request {}

export type DeletePostRequest = GetPostRequest;
