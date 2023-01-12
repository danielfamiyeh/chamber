import React from 'react';
import { useQuery } from 'react-query';
import { Alert, FlatList } from 'react-native';

import Post from './components/post/Post';
import Loading from '../../../components/display/indicator/loading/Loading';

import { serverRequest } from '../../../utils/methods/network';
import styles from './styles';

const Feed = ({ navigation: { navigate } }) => {
  const { data, isLoading } = useQuery('feed', () =>
    serverRequest('feed/post?subpath=feed', {}, true)
  );

  React.useEffect(() => {
    if (!isLoading && data?.error) {
      Alert.alert('An error occured', data?.error);
    }
  }, [isLoading, data?.error]);

  return isLoading ? (
    <Loading />
  ) : (
    <FlatList
      data={data}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => <Post {...item} navigate={navigate} />}
    />
  );
};

export default Feed;
