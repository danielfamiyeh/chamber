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
      <Text>{startCase(props.type)}</Text>
      <FlatList
        data={props.items}
        renderItem={({ item }) => <RequestListItem {...item} />}
      />
    </View>
  );
};

interface RequestListProps {
  type: string;
  items: RelationRequest[];
}

export default RequestList;
