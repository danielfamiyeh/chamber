import React from 'react';
import moment from 'moment';
import { useQuery } from 'react-query';
import { Alert, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Loading from '../../../../components/display/indicator/loading/Loading';

import { serverRequest } from '../../../../utils/methods/network';
import styles from './ProfileSettings.styles';

const ProfileSettings = () => {
  const { data, isLoading } = useQuery('user', () =>
    serverRequest('user/post', {}, true)
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
      {data?.avatar ? (
        <Image
          style={styles.avatar}
          source={{
            uri: data?.avatar,
          }}
        />
      ) : (
        <View style={styles.avatar}>
          <Icon name="account-circle" size={108} />
        </View>
      )}
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

export default ProfileSettings;
