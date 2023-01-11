import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

const CreatePost = ({ navigation: { navigate } }) => {
  return <ScrollView contentContainerStyle={styles.container} />;
};

export default CreatePost;
