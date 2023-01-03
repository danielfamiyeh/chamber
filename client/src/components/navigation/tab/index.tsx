import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FriendsView from '../../../views/friends';
import MessageFlow from '../stack/flows/message';
import AccountView from '../../../views/account';
import { scaleY } from '../../../utils/methods/scaleable-units';

const Tab = createBottomTabNavigator();

const screens = [
  {
    name: 'MessageFlow',
    Component: MessageFlow,
    iconName: 'wechat',
    options: {
      headerShown: false,
      tabBarLabel: 'Messages',
    },
  },

  { name: 'Friends', Component: FriendsView, iconName: 'users' },

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
