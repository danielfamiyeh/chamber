import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FriendsView from '../../../../views/friends';
import Button from '../../../input/button/Button';

import { scaleX } from '../../../../utils/methods/scaleable-units';

const Stack = createStackNavigator();

const FriendsFlow = ({ navigation: { navigate } }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Friends"
        component={FriendsView}
        options={{
          headerRight: () => (
            <Button
              noBorder
              style={{ marginRight: scaleX(12) }}
              onPress={() => navigate('Add Friend')}
            >
              <Icon name="plus" size={24} />
            </Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default FriendsFlow;
