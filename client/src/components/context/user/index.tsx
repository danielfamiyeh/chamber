import React, { createContext, useContext } from 'react';

import useLocalStorage from '../../../utils/hooks/useLocalStorage';
import { IUserContext, User } from '../../../../types';
import { signUp, signOut } from './utils/methods';
import { UserSchema } from '../../../models';

const UserContext = createContext<IUserContext>({
  user: UserSchema.model,
  setUser: () => {},
  signOut: () => {},
  signUp: () => {},
});

export const UserProvider = (props: any) => {
  const { val: user, setVal: setUser } = useLocalStorage<User>(
    '@user',
    UserSchema.model
  );

  return (
    <UserContext.Provider
      {...props}
      value={{ user, setUser, signUp, signOut }}
    />
  );
};

export const useUser = () => useContext(UserContext);
