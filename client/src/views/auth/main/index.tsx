import React from 'react';
import { startCase } from 'lodash';
import { useRoute } from '@react-navigation/native';
import { Text, Image, View, Alert } from 'react-native';

import Button from '../../../components/input/button/Button';
import { useSession } from '../../../components/context/session';
import FormMain from '../../../components/input/form/main/FormMain';

import { authForm, AuthMethod } from './utils/constants';
import { toast } from '../../../utils/methods/toast';
import { API_SERVER_URL } from '../../../config';
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
    try {
      const session = await (
        await fetch(
          `${API_SERVER_URL}/auth/${method === 'signIn' ? 'post' : 'put'}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify(model),
          }
        )
      ).json();

      if (session.error) {
        throw new Error(session.error);
      } else if (session?._id && session?.token) {
        toast.success('Success', 'Signing you in. Please wait...');
        return setSession(session);
      }

      throw new Error("We couldn't complete your request");
    } catch (error: any) {
      Alert.alert('An error occurred', error.message);
    }
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
