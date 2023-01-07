import { Request } from 'express';
import { Post } from '@danielfamiyeh/chamber-common';

export interface GetPostRequest extends Request {
  body: {
    postId: string;
    userId: string;
  };
}

export interface CreatePostRequest extends Request {
  body: { post: Omit<Post, '_id'>; userId: string };
}

export interface UpdatePostRequest extends Request {
  body: {
    post: Post;
    userId: string;
  };
}

export type DeletePostRequest = GetPostRequest;
