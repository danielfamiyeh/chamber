import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  NumTotalRecordsMap,
  PaginationDispatch,
  PaginationMap,
} from '../../../../../utils/hooks/usePaginate';
import SearchResultsListItem, {
  SearchResult,
} from '../list-item/SearchResultsListItem';
import Button from '../../../../../components/input/button/Button';
import SearchResultsListFooter from '../list-footer/SearchResultsListFooter';

import styles from './SearchResultsList.styles';

const SearchResultList = (props: SearchResultListProps) => {
  if (!props.results.length && props.hasSearched) {
    return (
      <View style={styles.listEmptyContainer}>
        <Icon name="sad-cry" style={styles.listEmptyIcon} size={96} />
        <Text style={styles.noResultsPrompt}>
          We couldn't find anyone with a matching username
        </Text>
        <Button style={styles.searchAgainButton} onPress={props.onSearchAgain}>
          <Text style={styles.searchAgainButtonText}>Search Again</Text>
        </Button>
      </View>
    );
  } else if (props.results.length) {
    return (
      <FlatList
        data={props.results}
        stickyHeaderIndices={[0]}
        contentContainerStyle={styles.searchResultsContainer}
        renderItem={({ item }) => <SearchResultsListItem {...item} />}
        ListHeaderComponent={() => (
          <SearchResultsListFooter
            pageState={props.pageState}
            pageDispatch={props.pageDispatch}
            numTotalRecords={props.numTotalRecords}
          />
        )}
      />
    );
  } else {
    return (
      <View style={styles.listEmptyContainer}>
        <Icon name="sad-cry" style={styles.listEmptyIcon} size={96} />
        <Text style={styles.listEmptyText}>How sad.</Text>
        <Text style={styles.listEmptyText}>You have no friends!</Text>
        <Button style={styles.searchButton} onPress={props.onSearchAgain}>
          <Text style={styles.searchAgainButtonText}>Find Some</Text>
        </Button>
      </View>
    );
  }
};

export interface SearchResultListProps {
  hasSearched: boolean;
  results: SearchResult[];
  pageState: PaginationMap;
  numTotalRecords: NumTotalRecordsMap;
  pageDispatch: PaginationDispatch;
  onSearchAgain: () => void;
}

export default SearchResultList;
