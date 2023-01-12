import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Carousel from '../../../../views/auth/carousel';
import AuthMain from '../../../../views/auth/main';

const Stack = createStackNavigator();

const AuthFlow = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AuthCarousel" component={Carousel} />
      <Stack.Screen name="AuthMain" component={AuthMain} />
    </Stack.Navigator>
  );
};

export default AuthFlow;
