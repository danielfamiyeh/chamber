import React from 'react';
import { Text, View } from 'react-native';

import Button from '../../button/Button';

import styles from './HeaderToggle.styles';

const HeaderToggle = (props: HeaderToggleProps) => {
  return (
    <View style={styles.container}>
      {props.items.map(({ name, onChange }, i) => (
        <Button
          key={name}
          onPress={onChange}
          style={{
            ...styles.item,
            borderRightWidth: +(i < props.items.length - 1),
            borderLeftWidth: +(i === props.items.length - 1),
          }}
        >
          <Text style={styles.itemText}>{name}</Text>
        </Button>
      ))}
    </View>
  );
};

export interface HeaderToggleItem {
  name: string;
  onChange: () => void;
}

export interface HeaderToggleProps {
  items: HeaderToggleItem[];
}

export default HeaderToggle;
