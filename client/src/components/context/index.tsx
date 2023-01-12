import React from 'react';

import { QueryProvider } from './query';
import { SessionProvider } from './session';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <SessionProvider>{children}</SessionProvider>
    </QueryProvider>
  );
};

export default AppProvider;
