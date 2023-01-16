import React from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';
import { Relation } from '@danielfamiyeh/chamber-common';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../../../../../components/input/button/Button';

import styles, { iconSize } from './FriendsListItem.styles';
import { onSendMessage } from './utils/methods';

const FriendsListItem = (props: FriendsListItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftMeta}>
        <Text>{props.user?.username}</Text>
        <Text style={styles.dateText}>
          Friends since: {moment(props.createdAt).format('DD/MM/YYYY')}
        </Text>
      </View>

      <View style={styles.rightCta}>
        <Button
          style={styles.sendMessageButton}
          onPress={onSendMessage(props._id, props.navigate)}
        >
          <Icon name="message" size={iconSize} />
        </Button>
      </View>
    </View>
  );
};

interface FriendsListItemProps extends Relation {
  navigate: Function;
}

export default FriendsListItem;
