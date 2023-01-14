import React from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';
import { User } from '@danielfamiyeh/chamber-common';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../../../../../components/input/button/Button';

import styles from './SearchResultsListItem.styles';

const iconSize = 24;

const SearchResultsListItem = (props: SearchResult) => {
  const { navigate } = useNavigation();

  const onSendMessage = () => {
    navigate('CreateChat', {
      recipients: props._id,
    });
  };

  const onAddFriend = () => {
    if (props.friendsSince) {
      return;
    }
    // TODO: Add friend
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftMeta}>
        <Text style={styles.username}>{props.username}</Text>
        <Text style={styles.dateText}>
          Member since: {moment(props.createdAt).format('DD/MM/YYYY')}
        </Text>
        {!!props.friendsSince && (
          <Text style={styles.dateText}>
            Friends since: {moment(props.friendsSince).format('DD/MM/YYYY')}
          </Text>
        )}
      </View>

      <View style={styles.rightCta}>
        <Button onPress={onAddFriend} style={styles.addFriendButton}>
          <Icon
            name={props.friendsSince ? 'friend' : 'group-add'}
            size={iconSize}
          />
        </Button>
        <Button
          disabled={!props.friendsSince}
          onPress={onSendMessage}
          style={styles.sendMessageButton}
        >
          <Icon name="message" size={iconSize} />
        </Button>
      </View>
    </View>
  );
};

export type SearchResult = Pick<
  User,
  | '_id'
  | 'username'
  | 'chats'
  | 'relations'
  | 'incomingRelationRequests'
  | 'outgoingRelationRequests'
  | 'createdAt'
> & { friendsSince: Date };

export default SearchResultsListItem;
