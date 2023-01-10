import React from 'react';
import { FlatList } from 'react-native';

import styles from './styles';

const Feed = ({ navigation: { navigate } }) => {
  return <FlatList contentContainerStyle={styles.container} />;
};

export default Feed;
