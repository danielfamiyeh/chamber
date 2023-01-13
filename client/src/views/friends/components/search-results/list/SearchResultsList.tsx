import React from 'react';
import { Text, View } from 'react-native';
import { User } from '@danielfamiyeh/chamber-common';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Button from '../../../../../components/input/button/Button';

import styles from './SearchResultsList.styles';

const SearchResultList = (props: SearchResultListProps) => {
  const isEmpty = !props.results.length;

  return isEmpty ? (
    <View style={styles.listEmptyContainer}>
      <Icon name="sad-cry" style={styles.listEmptyIcon} size={96} />
      <Text style={styles.noResultsPrompt}>
        We couldn't find anyone with a matching username
      </Text>
      <Button style={styles.searchAgainButton} onPress={props.onSearchAgain}>
        <Text style={styles.searchAgainButtonText}>Search Again</Text>
      </Button>
    </View>
  ) : (
    <></>
  );
};

export interface SearchResultListProps {
  onSearchAgain: () => void;
  results: { user: User; addedAt: Date }[];
}

export default SearchResultList;
