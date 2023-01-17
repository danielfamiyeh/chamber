import RNEventSource from 'react-native-event-source';
import React, { createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import useLocalStorage from '../../../utils/hooks/useLocalStorage';
import { ISessionContext, Session } from '../../../../types';
import { SessionSchema } from '../../../models/session';
import { EVENT_SERVER_URL } from '../../../config';

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

  React.useEffect(() => {
    if (!session?._id) {
      return;
    }

    const eventSource = new RNEventSource(EVENT_SERVER_URL, {
      headers: {
        Authorization: `Bearer ${session?.token}`,
      },
    });

    eventSource.addEventListener('open', () =>
      console.log('Connection established')
    );

    eventSource.addEventListener('message', ({ data }) => {
      console.log(JSON.parse(data));
    });

    return () => {
      eventSource.removeAllListeners();
      eventSource.close();
    };

    // Init event source subscription
  }, [session?._id]);

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
