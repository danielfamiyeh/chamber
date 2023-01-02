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

export type SchemaField = {
  key: string;
  type:
    | typeof String
    | typeof Number
    | typeof Array<String>
    | typeof Array<Number>;
};

export type ChatMap = Record<string, Message[]>;

export type UserMap = Record<string, User>;

export type LogLevel = 'info' | 'warning' | 'error';
