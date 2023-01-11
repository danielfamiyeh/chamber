import React from 'react';
import { View } from 'react-native';
import ProfileSettings from './components/profile/ProfileSettings';

import styles from './styles';

const AccountView = () => {
  return (
    <View style={styles.container}>
      <ProfileSettings />
    </View>
  );
};

export default AccountView;
