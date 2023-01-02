// Models
export type Schema = {
  key: string;
  type:
    | typeof String
    | typeof Number
    | typeof Array<String>
    | typeof Array<Number>;
}[];

export type ConversationMap = Record<string, string>;

export type LogLevel = 'info' | 'warning' | 'error';
