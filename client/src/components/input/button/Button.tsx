import React from 'react';
import { Pressable, Text } from 'react-native';

import { ButtonProps } from '../../../../types';
import styles from './Button.styles';

const Button = (props: ButtonProps) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={{ ...styles.container, ...props.style }}
    >
      {!!props.text && (
        <Text style={{ ...styles.text, ...props.text.style }}>
          {props.text.content}
        </Text>
      )}
      {props.children}
    </Pressable>
  );
};

export default Button;
