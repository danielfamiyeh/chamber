import React from 'react';
import moment from 'moment';
import { Text, View, Image } from 'react-native';
import { Message, User } from '@danielfamiyeh/chamber-common';

import Button from '../../../../../components/input/button/Button';

import styles from './ChatListItem.styles';

const ChatListItem = (props: ChatListItemProps) => {
  const onPress = () => props.navigate('Chat', { chatId: props.chatId });
  return (
    <Button style={styles.container} onPress={onPress}>
      <View style={styles.left}>
        <View style={styles.avatar} />
      </View>
      <View style={styles.right}>
        <Text style={styles.recipients}>
          {props.recipients.map(({ username }) => username).join(', ')}
        </Text>
        <View>
          <Text style={styles.lastMessage}>
            {/* TODO x sent a message*/}
            {props.lastMessage.content.value}
          </Text>
          <Text style={styles.timeAgo}>
            {moment(props.lastMessage.createdAt).fromNow()}
          </Text>
        </View>
      </View>
    </Button>
  );
};

export interface ChatListItemProps {
  chatId: string;
  recipients: (string | User)[];
  lastMessage: string | Message;
  navigate: Function;
}

export default ChatListItem;
