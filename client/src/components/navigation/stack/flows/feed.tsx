import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CreatePost from '../../../../views/feed/create-post';
import Comments from '../../../../views/feed/comments';
import Button from '../../../input/button/Button';
import Feed from '../../../../views/feed/main';

import { scaleX } from '../../../../utils/methods/scaleable-units';

const Stack = createStackNavigator();

const FeedFlow = ({ navigation: { navigate } }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerRight: () => (
            <Button
              noBorder
              style={{ marginRight: scaleX(12) }}
              onPress={() => navigate('Create Post')}
            >
              <Icon name="plus" size={24} />
            </Button>
          ),
        }}
      />
      <Stack.Screen name="Comments" component={Comments} />
      <Stack.Screen name="Create Post" component={CreatePost} />
    </Stack.Navigator>
  );
};

export default FeedFlow;
