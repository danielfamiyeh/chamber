import React from 'react';
import { startCase } from 'lodash';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { RelationRequest } from '@danielfamiyeh/chamber-common';

import styles from './RequestList.styles';
import RequestListItem from '../list-item/RequestListItem';

const RequestList = (props: RequestListProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{startCase(props.direction)}</Text>
      <FlatList
        data={props.items}
        renderItem={({ item }) => (
          <RequestListItem direction={props.direction} {...item} />
        )}
      />
    </View>
  );
};

interface RequestListProps {
  items: RelationRequest[];
  direction: 'incoming' | 'outgoing';
}

export default RequestList;
