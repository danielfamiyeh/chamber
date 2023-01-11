import React from 'react';
import { Text, View } from 'react-native';

import AccountActionList from './components/actions/list/AccountActionList';
import ProfileSettings from './components/profile/ProfileSettings';

import styles from './styles';

const AccountView = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Profile</Text>
        <ProfileSettings />
      </View>

      <View>
        <Text style={styles.text}>Actions</Text>
        <AccountActionList />
      </View>
    </View>
  );
};

export default AccountView;
