import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Button from '../../../../../components/input/button/Button';

import {
  NumTotalRecordsMap,
  PageDirection,
  paginateOffset,
  PaginationDispatch,
  PaginationMap,
} from '../../../../../utils/hooks/usePaginate';
import styles from './SearchResultsListFooter.styles';

const SearchResultsListFooter = (props: SearchResultsListFooterProps) => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        disabled={!props.pageState.search.skip}
        onPress={() =>
          props.pageDispatch({
            key: 'search',
            direction: PageDirection.LEFT,
          })
        }
      >
        <Icon
          name="backward"
          color={props.pageState.search.skip ? 'black' : 'white'}
        />
      </Button>
      <Text style={styles.text}>
        Displaying results{' '}
        <Text style={styles.number}>{props.pageState.search.skip + 1}</Text> to{' '}
        <Text style={styles.number}>
          {props.pageState.search.limit < props.numTotalRecords.search
            ? props.pageState.search.limit
            : props.numTotalRecords.search}{' '}
        </Text>
        of <Text style={styles.number}>{props.numTotalRecords.search}</Text>{' '}
        results.
      </Text>
      <Button
        style={styles.button}
        onPress={() =>
          props.pageDispatch({
            key: 'search',
            direction: PageDirection.RIGHT,
          })
        }
        disabled={
          props.pageState.search.skip + paginateOffset >
          props.pageState.search.numTotalRecords
        }
      >
        <Icon
          name="forward"
          color={
            props.pageState.search.skip + paginateOffset >
            props.pageState.search.numTotalRecords
              ? 'white'
              : 'black'
          }
        />
      </Button>
    </View>
  );
};

export interface SearchResultsListFooterProps {
  pageState: PaginationMap;
  numTotalRecords: NumTotalRecordsMap;
  pageDispatch: PaginationDispatch;
}

export default SearchResultsListFooter;
