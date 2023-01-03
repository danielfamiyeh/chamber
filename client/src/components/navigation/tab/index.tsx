import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FriendsView from '../../../views/friends';
import MessageFlow from '../stack/flows/message';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Friends" component={FriendsView} />
      <Tab.Screen name="Messages" component={MessageFlow} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
