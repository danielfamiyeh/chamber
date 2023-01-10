export { models, log, trycatch, trycatchAsync, connectDb } from './src';

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
  admins: (User | string)[];
  createdBy: User | string;
  createdAt: Date;
  updatedAt: Date;
};

export type User = {
  _id: string;
  username: string;
  password: string;
  chats: (Chat | string)[];
  friends: (User | string)[];
  incomingFriendRequests: (FriendRequest | string)[];
  outgoingFriendRequests: (FriendRequest | string)[];
  validatePassword: (password: string) => Promise<Boolean>;
};

export type MessageContentType = 'image' | 'text';

export type Message = {
  _id: string;
  sender: User | string;
  createdAt: Date;
  chat: Chat | string;
  content: {
    type: MessageContentType;
    value: string;
  };
};

export type RelatedCollection = 'post' | 'chat';

export type ContentType = 'text' | 'image';

export type Content<T> = {
  _id: string;
  relatedCollection: RelatedCollection;
  relatedId: string | T;
  type: ContentType;
  value: string;
  createdBy: string | User;
  createdAt: Date;
  updatedAt: Date;
};

export type Post = {
  _id: string;
  content: (string | Content<Post>)[];
  createdBy: string | User;
  createdAt: Date;
  updatedAt: Date;
};
