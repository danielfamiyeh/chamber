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
  sender: string;
  createdAt: Date;
  content: string;
  chat_Id: string;
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
    contentType: string;
    content: string;
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
