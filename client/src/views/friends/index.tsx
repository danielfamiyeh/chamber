import React from 'react';
import { useQuery } from 'react-query';
import { TextInput, View } from 'react-native';

import SearchBar from './components/search-bar/SearchBar';
import SearchResultsList from './components/search-results/list/SearchResultsList';

import { useDebounce } from '../../utils/hooks/useDebounce';
import { usePaginate } from '../../utils/hooks/usePaginate';
import { searchUsers } from './utils/methods';
import styles from './styles';
import { useUser } from '../../utils/hooks/useUser';
import HeaderToggle from '../../components/input/toggle/header/HeaderToggle';

const FriendsView = () => {
  const [results, setResults] = React.useState([]);
  const searchBarInputRef = React.useRef<TextInput>();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [pageState, pageDispatch, numTotalRecords, setNumTotalRecords] =
    usePaginate('search');
  const [toggleState, setToggleState] = React.useState<'list' | 'request'>(
    'list'
  );

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

  useDebounce(onSearch, [searchTerm], 400);
  const { isLoading: isLoadingSearchData } = useQuery('search', onSearch);
  const { user, isLoadingUserData } = useUser();

  const onClearInput = () => setSearchTerm('');
  const onSearchAgain = () => {
    onClearInput();
    searchBarInputRef.current?.focus();
  };

  return (
    <View style={styles.container}>
      <HeaderToggle
        items={[
          { name: 'List', onChange: () => setToggleState('list') },
          { name: 'Requests', onChange: () => setToggleState('request') },
        ]}
      />
      {toggleState === 'list' && (
        <>
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            onClearInput={onClearInput}
            inputRef={searchBarInputRef}
          />
          <SearchResultsList
            results={results}
            pageState={pageState}
            pageDispatch={pageDispatch}
            onSearchAgain={onSearchAgain}
            numTotalRecords={numTotalRecords}
            relations={user?.relations ?? []}
            hasSearched={!!searchTerm && !isLoadingSearchData}
          />
        </>
      )}

      {toggleState === 'request' && <></>}
    </View>
  );
};

export default FriendsView;
