import React from 'react';
import { Image, Text, View } from 'react-native';
import { Message, User } from '@danielfamiyeh/chamber-common';

import Button from '../../../../../components/input/button/Button';

import styles, { getComputedStyles } from './ChatBubble.styles';

const ChatBubble = (props: ChatBubbleProps) => {
  const Content = React.useCallback(() => {
    switch (props.content.type) {
      case 'text':
        return <Text style={styles.contentText}>{props.content.value}</Text>;

      case 'image':
        return (
          <Image
            source={{ uri: props.content.value }}
            style={styles.contentImage}
          />
        );
    }
  }, [props.content.type, props.content.value]);

  const computedStyles = getComputedStyles(props);

  return (
    <Button style={styles.container} onPress={() => {}}>
      <View style={{ ...styles.content, ...computedStyles.content }}>
        <Content />
      </View>
      <Text style={styles.metaSender}>{(props.sender as User).username}</Text>
    </Button>
  );
};

export interface ChatBubbleProps extends Message {
  isOwn: boolean;
}

export default ChatBubble;
