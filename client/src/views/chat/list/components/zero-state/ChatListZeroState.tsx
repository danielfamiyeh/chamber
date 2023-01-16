import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Button from '../../../../../components/input/button/Button';

import styles, { iconProps } from './ChatListZeroState.styles';

const ChatListZeroState = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <Icon name="sad-cry" {...iconProps} />
      <Text style={styles.text}>You have no chats!</Text>
      <Text style={styles.text}>Why not create one with a friend?</Text>
      <Button style={styles.ctaButton} onPress={() => navigate('FriendsFlow')}>
        <Text style={styles.ctaButtonText}>View Friends</Text>
      </Button>
    </View>
  );
};

export default ChatListZeroState;
