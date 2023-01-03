import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreateUserView from '../../../views/CreateUser';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Create User" component={CreateUserView} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
