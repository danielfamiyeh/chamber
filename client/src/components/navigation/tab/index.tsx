import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountView from '../../../views/account';
import MessageFlow from '../stack/flows/message';
import FriendsFlow from '../stack/flows/friends';
import FeedFlow from '../stack/flows/feed';

import { scaleY } from '../../../utils/methods/scaleable-units';

const Tab = createBottomTabNavigator();

const screens = [
  {
    name: 'FeedFlow',
    Component: FeedFlow,
    iconName: 'home',
    options: {
      headerShown: false,
      tabBarLabel: 'Feed',
    },
  },
  {
    name: 'MessageFlow',
    Component: MessageFlow,
    iconName: 'wechat',
    options: {
      headerShown: false,
      tabBarLabel: 'Chats',
    },
  },

  {
    name: 'FriendsFlow',
    Component: FriendsFlow,
    iconName: 'users',
    options: {
      headerShown: false,
      tabBarLabel: 'Friends',
    },
  },

  {
    name: 'Account',
    Component: AccountView,
    iconName: 'user-circle-o',
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
                <Icon size={24} name={iconName} color={color} style={{}} />
              ),
              tabBarStyle: {
                height: scaleY(48),
              },
              ...options,
            })}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;
