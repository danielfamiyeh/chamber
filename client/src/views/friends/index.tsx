import React from 'react';
import { useQuery } from 'react-query';
import { TextInput, View } from 'react-native';

import SearchBar from './components/search-bar/SearchBar';
import SearchResultsList from './components/search-results/list/SearchResultsList';

import { useDebounce } from '../../utils/hooks/useDebounce';
import { usePaginate } from '../../utils/hooks/usePaginate';
import { searchUsers } from './utils/methods';
import styles from './styles';

const FriendsView = () => {
  const [results, setResults] = React.useState([]);
  const searchBarInputRef = React.useRef<TextInput>();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [pageState, pageDispatch, numTotalRecords, setNumTotalRecords] =
    usePaginate('search', 'friends');

  const onSearch = React.useCallback(
    () =>
      searchUsers(
        searchTerm,
        pageState.search.skip,
        pageState.search.limit,
        setResults,
        setNumTotalRecords
      ),
    [
      searchTerm,
      pageState.search.skip,
      pageState.search.limit,
      setNumTotalRecords,
    ]
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
      <SearchResultsList
        results={results}
        pageState={pageState}
        pageDistpach={pageDispatch}
        onSearchAgain={onSearchAgain}
        numTotalRecords={numTotalRecords}
        hasSearched={!!searchTerm && !isLoadingSearchData}
      />
    </View>
  );
};

export default FriendsView;
