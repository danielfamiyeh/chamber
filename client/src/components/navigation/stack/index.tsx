import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreateUserView from '../../../views/auth/create-user';
import ChatWindowView from '../../../views/chat/window';
import ChatListView from '../../../views/chat/list';
import { useUser } from '../../context/user';
import { useSession } from '../../context/session';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { user } = useUser();
  const { session } = useSession();

  return (
    <Stack.Navigator>
      {session?.id && user?.id ? (
        <>
          <Stack.Screen name="Messages" component={ChatWindowView} />
          <Stack.Screen name="Chats" component={ChatListView} />
        </>
      ) : (
        <Stack.Screen name="Sign Up" component={CreateUserView} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
