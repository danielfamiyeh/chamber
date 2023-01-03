import { ReactNode } from 'react';
import { GestureResponderEvent } from 'react-native';

export type ColorVariant = 'info' | 'success' | 'warning' | 'error';

export type ThemeableProps = 'border' | 'background';

export interface ThemeableComponentProps {
  colorVariant?: ColorVariant;
}

export type Theme = Record<ColorVariant | ThemeableProps, string>;

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

export type Session = {
  id: string;
  token: string;
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

export interface IUserContext {
  user: User;
  setUser: (setterOrUser: ((oldUser: User) => void) | User) => void;
  signIn: (username: string) => void;
  signOut: () => void;
}

export type ToastType = 'info' | 'success' | 'warning' | 'error';

export interface ISessionContext {
  session: Session;
  setSession: (setterOrSession: ((oldSession: Session) => void) | User) => void;
}
