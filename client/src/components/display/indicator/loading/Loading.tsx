import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './Loading.styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.indicator} />
    </View>
  );
};

export default Loading;
