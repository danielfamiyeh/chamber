import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Navigator from './components/navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
