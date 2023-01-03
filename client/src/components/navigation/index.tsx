import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './stack';

const Navigator = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default Navigator;
