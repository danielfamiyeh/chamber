import React from 'react';
import moment from 'moment';
import { Alert, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Loading from '../../../../components/display/indicator/loading/Loading';

import { useUser } from '../../../../utils/hooks/useUser';
import styles from './ProfileSettings.styles';

const ProfileSettings = () => {
  const { user, isLoadingUserData } = useUser();

  React.useEffect(() => {
    if (!isLoadingUserData && user?.error) {
      Alert.alert('An error occured', user?.error);
    }
  }, [isLoadingUserData, user?.error]);

  return isLoadingUserData ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      {user?.avatar ? (
        <Image
          style={styles.avatar}
          source={{
            uri: user?.avatar,
          }}
        />
      ) : (
        <View style={styles.avatar}>
          <Icon name="account-circle" size={108} />
        </View>
      )}
      <Text style={styles.username}>@{user?.username ?? 'user'}</Text>

      <View style={styles.meta}>
        <Text style={styles.createdAt}>
          Account created at: {moment(user?.createdAt).format('DD/MM/YYYY')}
        </Text>
        {!!user?.updatedAt && (
          <Text style={styles.updatedAt}>
            Last updated at: {moment(user?.updatedAt).format('DD/MM/YYYY')}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ProfileSettings;
