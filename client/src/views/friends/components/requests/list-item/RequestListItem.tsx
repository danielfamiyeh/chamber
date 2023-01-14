import React from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';
import { RelationRequest, User } from '@danielfamiyeh/chamber-common';

import RequestListItemCta from '../list-item-cta/RequestListItemCta';

import styles from './RequestListItem.styles';

const RequestListItem = (props: RequestListItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.metaContainer}>
        <Text style={styles.username}>{(props.from as User).username}</Text>
        <Text style={styles.date}>
          Sent at: {moment(props.createdAt).format('DD/MM/YYYY')}
        </Text>
      </View>

      <RequestListItemCta direction={props.direction} requestId={props._id} />
    </View>
  );
};

interface RequestListItemProps extends RelationRequest {
  direction: 'incoming' | 'outgoing';
}

export default RequestListItem;
