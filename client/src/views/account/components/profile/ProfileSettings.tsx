import React from 'react';
import moment from 'moment';
import { useQuery } from 'react-query';
import { Alert, Text, View, Image } from 'react-native';

import Loading from '../../../../components/display/indicator/loading/Loading';
import { useSession } from '../../../../components/context/session';

import { serverRequest } from '../../../../utils/methods/network';
import { testUser } from '../../../../utils/data/test/user';
import { Session } from '../../../../../types';
import styles from './ProfileSettings.styles';

const ProfileSettings = (props: ProfileSettingsProps) => {
  const { data, isLoading } = useQuery('user', () =>
    serverRequest('user/post?subpath=user', {}, true)
  );

  React.useEffect(() => {
    if (!isLoading && data?.error) {
      Alert.alert('An error occured', data?.error);
    }
  }, [isLoading, data?.error]);

  return isLoading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: testUser.avatar,
        }}
      />
      <Text style={styles.username}>@{data?.username ?? 'user'}</Text>

      <View style={styles.meta}>
        <Text style={styles.createdAt}>
          Account created at: {moment(data?.createdAt).format('DD/MM/YYYY')}
        </Text>
        {!!data?.updatedAt && (
          <Text style={styles.updatedAt}>
            Last updated at: {moment(data?.updatedAt).format('DD/MM/YYYY')}
          </Text>
        )}
      </View>
    </View>
  );
};

export interface ProfileSettingsProps {
  session: Session;
}

export default ProfileSettings;
