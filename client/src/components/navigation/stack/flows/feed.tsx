import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../../../../views/feed/main';

const Stack = createStackNavigator();

const FeedFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};

export default FeedFlow;
