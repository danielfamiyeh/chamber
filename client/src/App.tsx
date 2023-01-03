import React from 'react';
import { SafeAreaView } from 'react-native';
import AppProvider from './components/context';

import Navigator from './components/navigation';
import appStyles from './styles';

const App = () => {
  return (
    <SafeAreaView style={appStyles.container}>
      <AppProvider>
        <Navigator />
      </AppProvider>
    </SafeAreaView>
  );
};

export default App;
