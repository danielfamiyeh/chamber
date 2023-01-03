import { Request } from 'express';

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
  incomingFriendRequests: FriendRequest[];
  outgoingFriendRequests: FriendRequest[];
  chatIds: string[];
  username: string;
  id: string;
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
