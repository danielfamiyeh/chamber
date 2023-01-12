import React from 'react';
import Toast from 'react-native-toast-message';
import { ActivityIndicator, View, SafeAreaView } from 'react-native';

import Navigator from './components/navigation';
import AppProvider from './components/context';

import { preloadImages } from './assets/preload';
import styles from './styles';

const App = () => {
  const [imagesLoaded, setImagesLoaded] = React.useState(false);

  React.useEffect(() => {
    preloadImages().then(() => setImagesLoaded(true));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AppProvider>
        {imagesLoaded ? (
          <Navigator />
        ) : (
          <View style={styles.loadingContainer}>
            <ActivityIndicator />
          </View>
        )}
      </AppProvider>
      <Toast />
    </SafeAreaView>
  );
};

export default App;
