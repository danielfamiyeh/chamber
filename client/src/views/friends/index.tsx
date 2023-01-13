import React from 'react';
import { View } from 'react-native';
import { useQuery } from 'react-query';

import SearchBar from './components/search-bar/SearchBar';

import styles from './styles';

const FriendsView = () => {
  const onSubmit = (async = () => {});
  const { data, isLoading } = useQuery('search', async () => {
    // search with query
    // use lazy query
  });
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  );
};

export default FriendsView;
