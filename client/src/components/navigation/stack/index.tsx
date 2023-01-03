import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreateUserView from '../../../views/auth/create-user';

import { useUser } from '../../context/user';
import { useSession } from '../../context/session';
import TabNavigator from '../tab';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { user } = useUser();
  const { session } = useSession();

  return (
    <Stack.Navigator>
      {session?.id && user?.id ? (
        <>
          <Stack.Screen
            name="App"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen name="Sign Up" component={CreateUserView} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
