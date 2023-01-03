import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreateUserView from '../../../views/auth/create-user';
import ChatWindowView from '../../../views/chat/window';
import ChatListView from '../../../views/chat/list';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Create User" component={CreateUserView} />
      <Stack.Screen name="Chat Window" component={ChatWindowView} />
      <Stack.Screen name="Chat List" component={ChatListView} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
