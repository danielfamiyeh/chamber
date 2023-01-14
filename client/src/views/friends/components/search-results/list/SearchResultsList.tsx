import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Button from '../../../../../components/input/button/Button';

import SearchResultsListItem, {
  SearchResult,
} from '../list-item/SearchResultsListItem';
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
        renderItem={({ item }) => <SearchResultsListItem {...item} />}
        data={props.results}
        contentContainerStyle={styles.searchResultsContainer}
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
  onSearchAgain: () => void;
  results: SearchResult[];
  hasSearched: boolean;
}

export default SearchResultList;
