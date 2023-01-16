import React from 'react';
import moment from 'moment';
import { Pressable, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Relation, User } from '@danielfamiyeh/chamber-common';

import Button from '../../../../../components/input/button/Button';

import { onSendMessage, onNavigateProfile } from './utils/methods';
import styles, { iconSize } from './FriendsListItem.styles';

const FriendsListItem = (props: FriendsListItemProps) => {
  return (
    <Pressable
      style={styles.container}
      onPress={onNavigateProfile(props._id, props.navigate)}
    >
      <View style={styles.leftMeta}>
        <Text>{(props.user as User)?.username}</Text>
        <Text style={styles.dateText}>
          Friends since: {moment(props.createdAt).format('DD/MM/YYYY')}
        </Text>
      </View>

      <View style={styles.rightCta}>
        <Button
          style={styles.sendMessageButton}
          onPress={onSendMessage(
            props._id,
            (props.user as User)?.username,
            props.navigate
          )}
        >
          <Icon name="message" size={iconSize} />
        </Button>
      </View>
    </Pressable>
  );
};

interface FriendsListItemProps extends Relation {
  navigate: Function;
}

export default FriendsListItem;
