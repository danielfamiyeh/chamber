import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Button from '../../../../../components/input/button/Button';
import { onPaginate, Paginate, paginateOffset } from '../../../utils/methods';

import styles from './SearchResultsListFooter.styles';

const SearchResultsListFooter = (props: SearchResultsListFooterProps) => {
  const _onPaginate = (direction: Paginate) => () =>
    onPaginate(
      direction,
      props.skip,
      props.numResults,
      props.setSkip,
      props.setLimit
    );
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        disabled={!props.skip}
        onPress={_onPaginate(Paginate.LEFT)}
      >
        <Icon name="backward" color={props.skip ? 'black' : 'white'} />
      </Button>
      <Text style={styles.text}>
        Displaying results <Text style={styles.number}>{props.skip + 1}</Text>{' '}
        to{' '}
        <Text style={styles.number}>
          {props.limit < props.numResults ? props.limit : props.numResults}{' '}
        </Text>
        of <Text style={styles.number}>{props.numResults}</Text> results.
      </Text>
      <Button
        style={styles.button}
        onPress={_onPaginate(Paginate.RIGHT)}
        disabled={props.skip + paginateOffset > props.numResults}
      >
        <Icon
          name="forward"
          color={
            props.skip + paginateOffset > props.numResults ? 'white' : 'black'
          }
        />
      </Button>
    </View>
  );
};

export interface SearchResultsListFooterProps {
  skip: number;
  limit: number;
  numResults: number;
  setLimit: Function;
  setSkip: Function;
}

export default SearchResultsListFooter;
