import { ReactNode } from 'react';
import { GestureResponderEvent } from 'react-native';

export type Message = {
  sender: string;
  createdAt: Date;
  content: string;
  chatId: string;
  id: string;
};

export type User = {
  chatIds: string[];
  username: string;
  id: string;
};

export type Chat = {
  id: string;
  user1: string;
  user2: string;
  messages: Message[];
};

export type SchemaField = {
  key: string;
  type:
    | typeof String
    | typeof Number
    | typeof Array<String>
    | typeof Array<Number>
    | typeof Array<Message>
    | typeof Date;
};

export type GestureEventHandler = (evt: GestureResponderEvent) => void;

export interface ButtonTextProps {
  content: string;
  style?: object;
}

export type ColorVariant = 'info' | 'success' | 'warning' | 'error';

export interface ThemeableComponentProps {
  colorVariant?: ColorVariant;
}

export interface ButtonProps extends ThemeableComponentProps {
  onPress: GestureEventHandler;
  text?: ButtonTextProps;
  children?: ReactNode;
  disabled?: boolean;
  style?: object;
}

export type ServerRequestReturnType = 'json' | 'blob' | 'text' | 'arrayBuffer';

export interface Session {
  id: string;
  token: string;
}
