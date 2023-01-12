import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useSession } from '../../context/session';
import AuthFlow from './flows/auth';
import TabNavigator from '../tab';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { session } = useSession();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {session?.id && session?.token ? (
        <>
          <Stack.Screen
            name="App"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen name="AuthFlow" component={AuthFlow} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
