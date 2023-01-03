import React from 'react';
import { UserProvider } from './user';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default AppProvider;
