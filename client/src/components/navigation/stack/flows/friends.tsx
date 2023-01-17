import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FriendsView from '../../../../views/friends';
import ProfileView from '../../../../views/profile';

const Stack = createStackNavigator();

const FriendsFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Friends" component={FriendsView} />
      <Stack.Screen name="Profile" component={ProfileView} />
    </Stack.Navigator>
  );
};

export default FriendsFlow;
