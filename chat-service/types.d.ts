import { Request } from 'express';

export type LogLevel = 'info' | 'warning' | 'error';

export type FriendRequest = {
  _id: string;
  to: User | string;
  from: User | string;
  createdAt: Date;
};

export type Chat = {
  recipients: (User | string)[];
  messages: (Message | string)[];
  createdAt: Date;
  updatedAt: Date;
};

export type User = {
  _id: string | User;
  username: string;
  chats: (Chat | string)[];
  friends: (User | string)[];
  incomingFriendRequests: (FriendRequest | string)[];
  outgoingFriendRequests: (FriendRequest | string)[];
};

export type MessageContentType = 'image' | 'text';

export type Message = {
  sender: User | string;
  createdAt: Date;
  content: {
    type: MessageContentType;
    value: string;
  };
  chatId: string;
  _id: string;
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

export interface SendMessageRequest extends Request {
  body: {
    contentValue: string;
    contentType: string;
    userId: string;
    chatId: string;
  };
}

export interface GetMessageRequest extends Request {
  body: {
    chatId: string;
    userId: string;
    start?: number;
    end?: number;
  };
}

export interface CreateChatRequest extends Request {
  body: {
    userId: string;
    recipients: string[];
    initialMessage?: string;
  };
}

export interface GetChatRequest extends Request {
  body: {
    userId: string;
    chatId: string;
  };
}
