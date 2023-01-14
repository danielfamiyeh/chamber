import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { TextInput, View } from 'react-native';

import SearchBar from './components/search-bar/SearchBar';
import SearchResultList from './components/search-results/list/SearchResultsList';

import { useDebounce } from '../../utils/hooks/useDebounce';
import { getFriends, searchUsers } from './utils/methods';
import styles from './styles';

const FriendsView = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const searchBarInputRef = React.useRef<TextInput>();
  const onClearInput = () => setSearchTerm('');
  const onSearchAgain = () => {
    onClearInput();
    searchBarInputRef.current?.focus();
  };

  const [results, setResults] = React.useState([]);

  const onSearch = React.useCallback(
    () => searchUsers(searchTerm, setResults),
    [searchTerm]
  );

  const { data: friendsData, isLoading: isLoadingFriends } = useQuery(
    'friends',
    getFriends
  );

  const { isLoading: isLoadingSearchData } = useQuery('search', onSearch);

  useDebounce(onSearch, [searchTerm], 400);
  return (
    <View style={styles.container}>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onClearInput={onClearInput}
        inputRef={searchBarInputRef}
      />
      <SearchResultList
        onSearchAgain={onSearchAgain}
        results={results}
        hasSearched={!!searchTerm && !isLoadingSearchData}
      />
    </View>
  );
};

export default FriendsView;
