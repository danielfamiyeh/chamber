import { ChatMap, ClientMap, UserMap } from '../../types';

const storeNames = ['clients', 'chats', 'users'];

export const clients: ClientMap = {};
export const chats: ChatMap = {};
export const users: UserMap = {};

export const clearStores = () =>
  [clients, chats, users].forEach((store) =>
    Object.keys(store).forEach((key) => delete store[key])
  );
