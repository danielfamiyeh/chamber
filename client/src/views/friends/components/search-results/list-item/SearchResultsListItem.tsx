import React from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';
import { User } from '@danielfamiyeh/chamber-common';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../../../../../components/input/button/Button';

import styles, { iconSize } from './SearchResultsListItem.styles';
import { onAddFriend, onSendMessage } from './utils/methods';
import { QueryClient } from 'react-query';

const SearchResultsListItem = (props: SearchResultProps) => {
  const { navigate } = useNavigation();

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
        <Button
          style={styles.addFriendButton}
          onPress={() =>
            onAddFriend(props._id, props.username, !!props.friendsSince)().then(
              () => props.queryClient.invalidateQueries('user')
            )
          }
        >
          <Icon
            name={props.friendsSince ? 'friend' : 'group-add'}
            size={iconSize}
          />
        </Button>
        <Button
          disabled={!props.friendsSince}
          style={styles.sendMessageButton}
          onPress={onSendMessage(props._id, navigate)}
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

export interface SearchResultProps extends SearchResult {
  queryClient: QueryClient;
}

export default SearchResultsListItem;
