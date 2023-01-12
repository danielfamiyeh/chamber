import React from 'react';
import { Text, View } from 'react-native';

import AccountActionList from './components/actions/list/AccountActionList';
import ProfileSettings from './components/profile/ProfileSettings';
import { useSession } from '../../components/context/session';

import styles from './styles';

const AccountView = () => {
  const { session } = useSession();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Profile</Text>
        <ProfileSettings session={session} />
      </View>

      <View>
        <Text style={styles.text}>Actions</Text>
        <AccountActionList session={session} />
      </View>
    </View>
  );
};

export default AccountView;
