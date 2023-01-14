import React from 'react';
import { useQuery } from 'react-query';
import { TextInput, View } from 'react-native';

import SearchBar from './components/search-bar/SearchBar';
import SearchResultList from './components/search-results/list/SearchResultsList';

import { useDebounce } from '../../utils/hooks/useDebounce';
import { searchUsers } from './utils/methods';
import styles from './styles';

const FriendsView = () => {
  const [skip, setSkip] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [results, setResults] = React.useState([]);
  const searchBarInputRef = React.useRef<TextInput>();
  const [searchTerm, setSearchTerm] = React.useState('');

  const onSearch = React.useCallback(
    () => searchUsers(searchTerm, skip, limit, setResults),
    [searchTerm, skip, limit]
  );

  const { isLoading: isLoadingSearchData } = useQuery('search', onSearch);

  useDebounce(onSearch, [searchTerm], 400);

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
        skip={skip}
        limit={limit}
        results={results}
        setSkip={setSkip}
        setLimit={setLimit}
        onSearchAgain={onSearchAgain}
        hasSearched={!!searchTerm && !isLoadingSearchData}
      />
    </View>
  );
};

export default FriendsView;
