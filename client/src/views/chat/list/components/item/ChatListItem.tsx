import React from 'react';
import moment from 'moment';
import { Text } from 'react-native';
import { Chat, Message } from '@danielfamiyeh/chamber-common';

import Button from '../../../../../components/input/button/Button';

import styles from './ChatListItem.styles';

const ChatListItem = (props: ChatListItemProps) => {
  const onPress = () => props.navigate('Chat', { chatId: props._id });
  const numMessages = props.messages.length;
  const lastMessage = React.useMemo(
    () => props.messages[numMessages - 1],
    [props.messages, numMessages]
  );

  return (
    <Button style={styles.container} onPress={onPress}>
      <Text style={styles.recipients}>
        {props.recipients
          .slice(0, 2)
          .map(({ username }) => username)
          .join(', ')}
      </Text>
      <Text style={styles.lastMessage}>
        {(lastMessage as Message)?.content?.value}
      </Text>
      <Text style={styles.createdAt}>
        Created at:
        <Text style={styles.createdAtDate}>
          {' '}
          {moment(props.createdAt).format('DD/MM/YYYY')}
        </Text>
      </Text>
    </Button>
  );
};

export interface ChatListItemProps extends Chat {
  navigate: Function;
}
export default ChatListItem;
