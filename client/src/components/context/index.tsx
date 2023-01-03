import React from 'react';
import { UserProvider } from './user';
import { SessionProvider } from './session';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <UserProvider>{children}</UserProvider>
    </SessionProvider>
  );
};

export default AppProvider;
