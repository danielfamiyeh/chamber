export { log, models, trycatch, trycatchAsync } from './src';

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
  _id: string;
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

export type RelatedCollection = 'post' | 'chat';

export type ContentType = 'text' | 'image';

export type Content<T> = {
  relatedCollection: RelatedCollection;
  relatedId: string | T;
  type: ContentType;
  value: string;
  createdBy: string | User;
  createdAt: Date;
  updatedAt: Date;
};

export type Post = {
  content: Content<Post>[];
  createdBy: string | User;
  createdAt: Date;
  updatedAt: Date;
};
