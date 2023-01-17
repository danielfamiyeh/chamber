import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { Pressable, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MessageContentType } from '@danielfamiyeh/chamber-common';

import Button from '../../../../../components/input/button/Button';

import { onSendMessage } from './utils/methods';
import styles from './ChatForm.styles';

const ChatForm = (props: ChatFormProps) => {
  const queryClient = useQueryClient();
  const [contentValue, setContentValue] = useState('');
  const [contentType, setContentType] = useState<MessageContentType>('text');

  return (
    <View style={styles.container}>
      {/* <View style={styles.imageButtonContainer}>
        <Button onPress={onSelectImage} style={styles.imageButton}>
          <Icon name="image" size={24} style={styles.imageButtonIcon} />
        </Button>
      </View> */}
      <Pressable style={styles.messageContainer}>
        <TextInput
          multiline
          value={contentValue}
          style={styles.textInput}
          placeholder="Type a message..."
          onChangeText={(val: string) => setContentValue(val)}
        />
        <Button
          disabled={!contentValue}
          style={styles.sendButton}
          onPress={() =>
            onSendMessage(
              props.chatId,
              contentValue,
              contentType,
              setContentValue,
              setContentType,
              queryClient
            )
          }
        >
          <Icon name="arrow-upward" style={styles.sendButtonIcon} size={24} />
        </Button>
      </Pressable>
    </View>
  );
};

export interface ChatFormProps {
  chatId: string;
}

export default ChatForm;
