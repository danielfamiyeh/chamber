import { Request } from 'express';

export type LogLevel = 'info' | 'warning' | 'error';

export type FriendRequest = {
  id: string;
  to: string;
  from: string;
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

export type Message = {
  sender: string;
  createdAt: Date;
  content: string;
  chatId: string;
  id: string;
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
