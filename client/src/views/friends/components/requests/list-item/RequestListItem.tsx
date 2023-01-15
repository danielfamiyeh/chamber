import React from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';
import { RelationRequest, User } from '@danielfamiyeh/chamber-common';

import RequestListItemCta from '../list-item-cta/RequestListItemCta';

import styles from './RequestListItem.styles';

const RequestListItem = (props: RequestListItemProps) => {
  const sender = React.useMemo(
    () => (props.direction === 'incoming' ? props.from : props.to),
    [props.direction, props.from, props.to]
  ) as User;

  return (
    <View style={styles.container}>
      <View style={styles.metaContainer}>
        <Text style={styles.username}>{sender?.username}</Text>
        <Text style={styles.date}>
          Sent at: {moment(props.createdAt).format('DD/MM/YYYY')}
        </Text>
      </View>

      <RequestListItemCta
        requestId={props._id}
        username={sender?.username}
        direction={props.direction}
      />
    </View>
  );
};

interface RequestListItemProps extends RelationRequest {
  direction: 'incoming' | 'outgoing';
}

export default RequestListItem;
