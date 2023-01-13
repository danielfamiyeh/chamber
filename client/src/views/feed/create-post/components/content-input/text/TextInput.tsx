import React from 'react';
import { View, Text, TextInput as RN_TextInput } from 'react-native';

import { ContentInputComponentProps } from '../ContentInput';

import styles from './TextInput.styles';

const TextInput = (props: ContentInputComponentProps) => {
  const [contentValue, setContentValue] = React.useState('');

  const _setContentValue = (text: string) => {
    setContentValue(text);
    props.setContentValue(text);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>What's on your mind?</Text>
      <RN_TextInput
        multiline
        style={styles.input}
        value={contentValue}
        placeholder="Type something here...."
        onChangeText={(text) => _setContentValue(text)}
      />
    </View>
  );
};

export default TextInput;
