import { Request } from 'express';

export type LogLevel = 'info' | 'warning' | 'error';

export type FriendRequest = {
  _id: string;
  to: string;
  from: string;
  createdAt: Date;
};

export type Chat = {
  recipients: User[];
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
};

export type User = {
  _id: string;
  username: string;
  chats: Chat[];
  friends: User[];
  incomingFriendRequests: FriendRequest[];
  outgoingFriendRequests: FriendRequest[];
};

export type Message = {
  _id: string;
  chatId: string;
  sender: string;
  createdAt: Date;
  content: string;
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
