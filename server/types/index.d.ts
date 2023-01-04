import { Request, Response } from 'express';

export type Message = {
  sender: string;
  createdAt: Date;
  content: string;
  chatId: string;
  id: string;
};

export type FriendRequest = {
  id: string;
  username: string;
  createdAt: Date;
};

export type User = {
  id: string;
  username: string;
  chatIds: string[];
  friends: string[];
  incomingFriendRequests: FriendRequest[];
  outgoingFriendRequests: FriendRequest[];
};

export type Chat = {
  id: string;
  user1: string;
  user2: string;
  messages: Message[];
};

export type SchemaField = {
  key: string;
  type:
    | typeof String
    | typeof Number
    | typeof Array<String>
    | typeof Array<Number>
    | typeof Array<Message>
    | typeof Array<FriendRequest>
    | typeof Date;
};

export type ChatMap = Record<string, Chat>;

export type UserMap = Record<string, User>;

export type LogLevel = 'info' | 'warning' | 'error';

export interface CreateUserRequest extends Request {
  query: {
    username: string;
  };
}

export interface CreateSSERequest extends Request {
  body: {
    sender: string;
    content: string;
    chatId: string;
  };
}

export interface ListenSSERequest extends Request {
  query: {
    userId: string;
  };
}

export type GetUserRequest = {
  query: {
    userId?: string;
    username: string;
  };
};

export interface AddFriendRequest extends Request {
  body: {
    username: string;
  };
}

export interface AcceptFriendRequest extends Request {
  request: FriendRequest;
}

export type RejectFriendRequest = AcceptFriendRequest;

export type RequestMap = Record<string, FriendRequest>;

export type ClientMap = Record<string, { req: Request; res: Response }>;
