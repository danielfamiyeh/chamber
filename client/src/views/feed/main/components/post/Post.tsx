import React from 'react';
import { View } from 'react-native';

import styles from './Post.styles';

const Post = (props: PostProps) => {
  return <View style={styles.container} />;
};

interface PostProps {}

export default Post;
