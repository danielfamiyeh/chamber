import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreateUserView from '../../../views/auth/create-user';
import ChatWindowView from '../../../views/chat/window';
import ChatListView from '../../../views/chat/list';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign Up" component={CreateUserView} />
      <Stack.Screen name="Messages" component={ChatWindowView} />
      <Stack.Screen name="Chats" component={ChatListView} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
