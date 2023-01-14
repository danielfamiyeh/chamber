export { models, log, trycatch, trycatchAsync, connectDb } from './src';

export type LogLevel = 'info' | 'warning' | 'error';

export type RelationRequest = {
  _id: string;
  to: User | string;
  from: User | string;
  createdAt: Date;
  updatedAt: Date;
  type: RelationType;
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
  avatar: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt?: Date;
  chats: (Chat | string)[];
  relations: (string | Relation)[];
  incomingRelationRequests: (RelationRequest | string)[];
  outgoingRelationRequests: (RelationRequest | string)[];
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

export type RelationType = 'friend' | 'closeFriend';

export type Relation = {
  type: RelationType;
  user: User | string;
  createdAt: Date;
  updatedAt: Date;
};
