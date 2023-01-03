import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChatWindowView from '../../../../views/chat/window';
import ChatListView from '../../../../views/chat/list';

const Stack = createStackNavigator();

const MessageFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={ChatListView} />
      <Stack.Screen name="Chat" component={ChatWindowView} />
    </Stack.Navigator>
  );
};

export default MessageFlow;
