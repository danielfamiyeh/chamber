import React from 'react';
import { View } from 'react-native';
import { useQuery } from 'react-query';
import { FlatList } from 'react-native-gesture-handler';

import SearchBar from './components/search-bar/SearchBar';

import { getFriends, searchUsers } from './utils/methods';
import styles from './styles';

const FriendsView = () => {
  const onSubmit = (async = () => {});
  const { data: friendsData, isLoading: isLoadingFriends } = useQuery(
    'friends',
    getFriends
  );

  const { data: searchData, isLoading: isLoadingSearchData } = useQuery(
    'search',
    searchUsers
  );

  return (
    <View style={styles.container}>
      {friendsData?.friends?.length ? (
        <FlatList data={friendsData.friends} />
      ) : null}
      <SearchBar />
    </View>
  );
};

export default FriendsView;
