import React from 'react';
import { GestureResponderEvent, View, Text } from 'react-native';

import Button from '../../../../../components/input/button/Button';

import styles, { getComputedStyles } from './AccountAction.styles';

const AccountAction = ({ name, Icon, ...props }: AccountActionProps) => {
  const computedStyles = getComputedStyles(props);

  return (
    <Button
      style={{ ...styles.container, ...computedStyles.container }}
      onPress={props.onPress}
    >
      <View style={styles.left}>
        <Text style={styles.leftText}>{name}</Text>
      </View>
      <View style={styles.right}>
        <Icon />
      </View>
    </Button>
  );
};

export interface AccountActionProps {
  onPress: (evt: GestureResponderEvent) => void;
  Icon: Function;
  index: number;
  numActions: number;
  name: string;
}

export default AccountAction;
