import React from 'react';
import { SafeAreaView } from 'react-native';

import Navigator from './components/navigation';
import appStyles from './styles';

const App = () => {
  return (
    <SafeAreaView style={appStyles.container}>
      <Navigator />
    </SafeAreaView>
  );
};

export default App;
