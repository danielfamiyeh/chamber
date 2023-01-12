import React from 'react';
import { startCase } from 'lodash';
import { Image, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import FormMain from '../../../components/input/form/main/FormMain';

import { authForm, AuthMethod } from './utils/constants';
import styles from './styles';

const AuthMain = ({ navigation: { navigate } }) => {
  const { params = {} } = useRoute();
  const { method = 'signIn' } = params;

  const onSubmit = React.useCallback(() => {}, []);
  const form = React.useMemo(() => authForm[method as AuthMethod], [method]);

  return (
    <View style={styles.container}>
      <FormMain
        form={form}
        onSubmit={onSubmit}
        title={startCase(method)}
        AboveForm={
          <Image
            source={require('../../../assets/auth/chamber_sign_in.png')}
            style={styles.image}
          />
        }
      />
    </View>
  );
};

export default AuthMain;
