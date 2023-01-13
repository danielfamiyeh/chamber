import React from 'react';
import { useQuery } from 'react-query';
import { TextInput, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import SearchBar from './components/search-bar/SearchBar';

import { getFriends, searchUsers } from './utils/methods';
import styles from './styles';
import SearchResultList from './components/search-results/list/SearchResultsList';

const FriendsView = () => {
  const { data: friendsData, isLoading: isLoadingFriends } = useQuery(
    'friends',
    getFriends
  );

  const { data: searchData, isLoading: isLoadingSearchData } = useQuery(
    'search',
    searchUsers
  );

  const [searchTerm, setSearchTerm] = React.useState('');
  const searchBarInputRef = React.useRef<TextInput>();
  const onClearInput = () => setSearchTerm('');
  const onSearchAgain = () => {
    onClearInput();
    searchBarInputRef.current?.focus();
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onClearInput={onClearInput}
        inputRef={searchBarInputRef}
      />
      <SearchResultList
        results={friendsData?.results ?? []}
        onSearchAgain={onSearchAgain}
      />
    </View>
  );
};

export default FriendsView;
