import React from 'react';
import { SafeAreaView } from 'react-native';
import Toast from 'react-native-toast-message';

import Navigator from './components/navigation';
import AppProvider from './components/context';

import appStyles from './styles';

const App = () => {
  return (
    <SafeAreaView style={appStyles.container}>
      <AppProvider>
        <Navigator />
      </AppProvider>
      <Toast />
    </SafeAreaView>
  );
};

export default App;
