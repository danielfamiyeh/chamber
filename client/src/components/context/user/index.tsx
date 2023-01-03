import React, { createContext, useContext } from 'react';

import useLocalStorage from '../../../utils/hooks/useLocalStorage';
import { signIn, signOut } from './utils/methods';
import { UserSchema } from '../../../models';
import { User } from '../../../../types';

const UserContext = createContext<User>(UserSchema.model);

export const UserProvider = (props: any) => {
  const { val: user, setVal: setUser } = useLocalStorage<User>(
    '@user',
    UserSchema.model
  );
  return (
    <UserContext.Provider
      {...props}
      value={{ user, setUser, signIn, signOut }}
    />
  );
};

export const useUser = () => useContext(UserContext);
