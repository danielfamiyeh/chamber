import React from 'react';
import { FlatList } from 'react-native';
import { testPost } from '../../../utils/data/test/post';
import Post from './components/post/Post';

import styles from './styles';

const Feed = ({ navigation: { navigate } }) => {
  const posts = React.useMemo(
    () => new Array(5).fill(null).map((_) => testPost),
    []
  );

  return (
    <FlatList
      data={posts}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => <Post {...item} navigate={navigate} />}
    />
  );
};

export default Feed;
