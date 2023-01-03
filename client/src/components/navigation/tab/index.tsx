import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FriendsView from '../../../views/friends';
import MessageFlow from '../stack/flows/message';

const Tab = createBottomTabNavigator();

const screens = [
  { name: 'Friends', Component: FriendsView, iconName: 'users' },
  {
    name: 'Messages',
    Component: MessageFlow,
    iconName: 'wechat',
    options: {
      headerShown: false,
    },
  },
];

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      {screens.map(({ name, Component, iconName, options = {} }) => {
        return (
          <Tab.Screen
            key={name}
            name={name}
            component={Component}
            options={() => ({
              tabBarIcon: ({ color }) => (
                <Icon size={24} name={iconName} color={color} />
              ),
              ...options,
            })}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;
