// Models
export type Message = {
  recipientId: string;
  senderId: string;
  content: string;
  id: string;
};

export type User = {
  chatIds: string[];
  username: string;
  id: string;
};

export type Chat = {
  id: string;
  userId1: string;
  userId2: string;
  messages: Message[];
};

export type SchemaField = {
  key: string;
  type:
    | typeof String
    | typeof Number
    | typeof Array<String>
    | typeof Array<Number>
    | typeof Array<Message>;
};

export type ChatMap = Record<string, Chat>;

export type UserMap = Record<string, User>;

export type LogLevel = 'info' | 'warning' | 'error';
