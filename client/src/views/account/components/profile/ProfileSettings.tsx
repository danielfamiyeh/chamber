import moment from 'moment';
import React from 'react';
import { Text, View, Image } from 'react-native';

import { useSession } from '../../../../components/context/session';

import { testUser } from '../../../../utils/data/test/user';
import styles from './ProfileSettings.styles';

const ProfileSettings = (props: ProfileSettingsProps) => {
  const { val: session } = useSession();

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: testUser.avatar,
        }}
      />
      <Text style={styles.username}>@{testUser.username}</Text>

      <View style={styles.meta}>
        <Text style={styles.createdAt}>
          Account created at: {moment(testUser.createdAt).format('DD/MM/YYYY')}
        </Text>
        {!!testUser.updatedAt && (
          <Text style={styles.updatedAt}>
            Last updated at: {moment(testUser.updatedAt).format('DD/MM/YYYY')}
          </Text>
        )}
      </View>
    </View>
  );
};

export interface ProfileSettingsProps {}

export default ProfileSettings;
