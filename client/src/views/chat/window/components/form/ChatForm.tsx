import React from 'react';
import { Pressable, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../../../../components/input/button/Button';

import styles from './ChatForm.styles';

const ChatForm = (props: ChatFormProps) => {
  const onSend = () => {};
  const onSelectImage = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.imageButtonContainer}>
        <Button onPress={onSelectImage} style={styles.imageButton}>
          <Icon name="image" size={24} style={styles.imageButtonIcon} />
        </Button>
      </View>
      <Pressable style={styles.messageContainer}>
        <TextInput
          multiline
          style={styles.textInput}
          placeholder="Type a message..."
        />
        <Button onPress={onSend} style={styles.sendButton}>
          <Icon name="arrow-upward" style={styles.sendButtonIcon} size={24} />
        </Button>
      </Pressable>
    </View>
  );
};

export interface ChatFormProps {}

export default ChatForm;
