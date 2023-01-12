import React from 'react';
import { startCase } from 'lodash';
import { useRoute } from '@react-navigation/native';
import { Text, Image, View, Alert } from 'react-native';

import Button from '../../../components/input/button/Button';
import { useSession } from '../../../components/context/session';
import FormMain from '../../../components/input/form/main/FormMain';

import { serverRequest } from '../../../utils/methods/network';
import { authForm, AuthMethod } from './utils/constants';
import { toast } from '../../../utils/methods/toast';
import styles from './styles';

const AuthMain = ({ navigation: { push } }) => {
  const { params = {} } = useRoute();
  const { method = 'signIn' } = params;

  const { setSession } = useSession();

  const linkText = `${
    method === 'signIn' ? "Don't" : 'Already'
  } have an account? ${startCase(method === 'signIn' ? 'signUp' : 'signIn')}`;
  const otherMethod = method === 'signIn' ? 'signUp' : 'signIn';
  const form = authForm[method as AuthMethod];

  const onSubmit = async (model: AuthModel) => {
    const session = await serverRequest(
      `auth/${method === 'signIn' ? 'post' : 'put'}`,
      {
        body: JSON.stringify(model),
      }
    );

    if (session.error) {
      return Alert.alert(session.error);
    } else if (session?._id && session?.token) {
      toast.success('Success', 'Signing you in. Please wait...');
      return setSession(session);
    }

    Alert.alert("We couldn't complete your request");
  };

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

interface AuthModel {
  username: string;
  password: string;
}

export default AuthMain;
