import React from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';
import { RelationRequest, User } from '@danielfamiyeh/chamber-common';

import styles from './RequestListItem.styles';

const RequestListItem = (props: RequestListItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.metaContainer}>
        <Text>{(props.from as User).username}</Text>
        <Text>Sent at: {moment(props.createdAt).format('DD/MM/YYYY')}</Text>
      </View>

      <View style={styles.ctaContainer}></View>
    </View>
  );
};

interface RequestListItemProps extends RelationRequest {}

export default RequestListItem;
