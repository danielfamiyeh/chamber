import React, { createContext, useContext } from 'react';

import useLocalStorage from '../../../utils/hooks/useLocalStorage';
import { ISessionContext, Session } from '../../../../types';
import { SessionSchema } from '../../../models/session';

const SessionContext = createContext<ISessionContext>({
  session: SessionSchema.model,
  setSession: () => {},
});

export const SessionProvider = (props: any) => {
  const { val: session, setVal: setSession } = useLocalStorage<Session>(
    '@session',
    SessionSchema.model
  );

  return (
    <SessionContext.Provider
      {...props}
      value={{
        session,
        setSession,
      }}
    />
  );
};

export const useSession = () => useContext(SessionContext);
