import React from 'react';
import { startCase } from 'lodash';
import { Text, Image, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Button from '../../../components/input/button/Button';
import FormMain from '../../../components/input/form/main/FormMain';

import { authForm, AuthMethod } from './utils/constants';
import styles from './styles';

const AuthMain = ({ navigation: { navigate, push } }) => {
  const { params = {} } = useRoute();
  const { method = 'signIn' } = params;

  const onSubmit = React.useCallback(() => {}, [method]);

  const form = React.useMemo(() => authForm[method as AuthMethod], [method]);
  const otherMethod = React.useMemo(
    () => (method === 'signIn' ? 'signUp' : 'signIn'),
    [method]
  );
  const linkText = React.useMemo(
    () =>
      `${
        method === 'signIn' ? "Don't" : 'Already'
      } have an account? ${startCase(
        method === 'signIn' ? 'signUp' : 'signIn'
      )}`,
    [method]
  );

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
        FooterChildren={
          <Button
            style={styles.linkContainer}
            onPress={() => push('AuthMain', { method: otherMethod })}
          >
            <Text style={styles.linkText}>{linkText}</Text>
          </Button>
        }
      />
    </View>
  );
};

export default AuthMain;
