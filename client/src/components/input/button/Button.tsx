import React from 'react';
import { Pressable, Text } from 'react-native';

import { getComputedStyles } from './utils/methods';
import { ButtonProps } from '../../../../types';
import styles from './Button.styles';

const Button = (props: ButtonProps) => {
  const [isPressed, setIsPressed] = React.useState(false);
  const computedStyles = getComputedStyles(props, isPressed);

  return (
    <Pressable
      onPress={props.onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={{
        ...styles.container,
        ...computedStyles.button,
        ...props.style,
      }}
    >
      {!!props.text && (
        <Text
          style={{
            ...styles.text,
            ...computedStyles.text,
            ...props.text.style,
          }}
        >
          {props.text.content}
        </Text>
      )}
      {props.children}
    </Pressable>
  );
};

Button.defaultProps = {
  colorVariant: 'info',
};

export default Button;
