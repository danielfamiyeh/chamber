import React from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';
import { User } from '@danielfamiyeh/chamber-common';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../../../../../components/input/button/Button';

import styles from './SearchResultsListItem.styles';

const SearchResultsListItem = (props: SearchResultsListItemProps) => {
  const { navigate } = useNavigation();

  const onSendMessage = () => {
    navigate('CreateChat', {
      recipients: props.user._id,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftMeta}>
        <Text>{props.user.username}</Text>
        <Text>{moment(props.friendsSince).format('DD/MM/YYYY')}</Text>
      </View>

      <View style={styles.rightCta}>
        <Button onPress={onSendMessage} style={styles.sendMessageButton}>
          <Icon name="message" size={32} />
        </Button>
      </View>
    </View>
  );
};

export interface SearchResultsListItemProps {
  user: User;
  friendsSince: Date;
}

export default SearchResultsListItem;
