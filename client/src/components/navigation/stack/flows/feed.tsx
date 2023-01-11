import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../../../../views/feed/main';
import Comments from '../../../../views/feed/comments';

const Stack = createStackNavigator();

const FeedFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
};

export default FeedFlow;
