import React from 'react';
import { Image, Text, View } from 'react-native';
import { Message, User } from '@danielfamiyeh/chamber-common';

import styles, { getComputedStyles } from './ChatBubble.styles';
import moment from 'moment';

const ChatBubble = (props: ChatBubbleProps) => {
  const computedStyles = getComputedStyles(props);
  const Content = React.useCallback(() => {
    switch (props.content.type) {
      case 'text':
        return (
          <Text
            style={{ ...styles.contentText, ...computedStyles.contentText }}
          >
            {props.content.value}
          </Text>
        );

      case 'image':
        return (
          <Image
            source={{ uri: props.content.value }}
            style={styles.contentImage}
          />
        );
    }
  }, [props.content.type, props.content.value, computedStyles.contentText]);

  return (
    <View style={{ ...styles.container, ...computedStyles.container }}>
      <View style={{ ...styles.content, ...computedStyles.content }}>
        <Content />
      </View>
      <Text
        style={{ ...styles.metaCreatedAt, ...computedStyles.metaCreatedAt }}
      >
        {props.isOwn ? 'You' : (props.sender as User).username} @{' '}
        {moment(props.createdAt).format('DD/MM/YYYY HH:mm')}
      </Text>
    </View>
  );
};

export interface ChatBubbleProps extends Message {
  isOwn: boolean;
}

export default ChatBubble;
