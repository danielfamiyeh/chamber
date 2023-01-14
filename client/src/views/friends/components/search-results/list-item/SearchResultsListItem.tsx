import React from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';
import { User } from '@danielfamiyeh/chamber-common';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../../../../../components/input/button/Button';

import styles from './SearchResultsListItem.styles';

const SearchResultsListItem = (props: SearchResult) => {
  const { navigate } = useNavigation();

  const onSendMessage = () => {
    navigate('CreateChat', {
      recipients: props._id,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftMeta}>
        <Text>{props.username}</Text>
        {/* <Text>{moment(props.friendsSince).format('DD/MM/YYYY')}</Text> */}
      </View>

      <View style={styles.rightCta}>
        <Button onPress={onSendMessage} style={styles.sendMessageButton}>
          <Icon name="message" />
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
>;

export default SearchResultsListItem;
