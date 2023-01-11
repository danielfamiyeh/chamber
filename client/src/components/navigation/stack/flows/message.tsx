import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CreateChatView from '../../../../views/chat/create-chat';
import ChatWindowView from '../../../../views/chat/window';
import ChatListView from '../../../../views/chat/list';
import Button from '../../../input/button/Button';

import { scaleX } from '../../../../utils/methods/scaleable-units';

const Stack = createStackNavigator();

const MessageFlow = ({ navigation: { navigate } }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chats"
        component={ChatListView}
        options={{
          headerRight: () => (
            <Button
              noBorder
              style={{ marginRight: scaleX(12) }}
              onPress={() => navigate('Create Chat')}
            >
              <Icon name="plus" size={24} />
            </Button>
          ),
        }}
      />
      <Stack.Screen name="Chat" component={ChatWindowView} />
      <Stack.Screen name="Create Chat" component={CreateChatView} />
    </Stack.Navigator>
  );
};

export default MessageFlow;
