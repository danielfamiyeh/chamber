import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

const CreatePostView = ({ navigation: { navigate } }) => {
  return <ScrollView contentContainerStyle={styles.container} />;
};

export default CreatePostView;
