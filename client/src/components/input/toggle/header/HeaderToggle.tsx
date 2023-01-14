import React from 'react';
import { Text, View } from 'react-native';

import Button from '../../button/Button';

import styles from './HeaderToggle.styles';

const HeaderToggle = (props: HeaderToggleProps) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.items.map(({ name, key }) => (
        <Button
          key={key}
          onPress={() => props.setToggleState(key ?? name)}
          style={styles.item}
        >
          <Text
            style={{
              ...styles.itemText,
              fontWeight: props.toggleState === key ? 'bold' : 'normal',
            }}
          >
            {name}
          </Text>
        </Button>
      ))}
    </View>
  );
};

export interface HeaderToggleItem {
  name: string;
  key: string;
}

export interface HeaderToggleProps {
  style?: object;
  toggleState: string;
  items: HeaderToggleItem[];
  setToggleState: Function;
}

export default HeaderToggle;
