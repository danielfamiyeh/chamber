import React, { createContext, useContext } from 'react';

import { signIn, signOut } from './utils/methods';
import { User } from '../../../../types/user';

const UserContext = createContext<User>({
  id: '',
  username: '',
});

export const UserProvider = (props: any) => {
  return <UserContext.Provider {...props} value={{ signIn, signOut }} />;
};

export const useUser = () => useContext(UserContext);
