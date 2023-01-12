import React, { createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import useLocalStorage from '../../../utils/hooks/useLocalStorage';
import { ISessionContext, Session } from '../../../../types';
import { SessionSchema } from '../../../models/session';

const SessionContext = createContext<ISessionContext>({
  session: SessionSchema.model,
  setSession: () => {},
});

export const SessionProvider = (props: any) => {
  const { val: session, setStoredVal: setSession } = useLocalStorage<Session>(
    '@session',
    SessionSchema.model
  );

  const signOut = () => {
    setSession({ _id: '', token: '' });
    AsyncStorage.clear();
  };

  return (
    <SessionContext.Provider
      {...props}
      value={{
        session,
        setSession,
        signOut,
      }}
    />
  );
};

export const useSession = () => useContext(SessionContext);
