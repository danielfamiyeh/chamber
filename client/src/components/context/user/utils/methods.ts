import { Alert } from 'react-native';
import { serverRequest } from '../../../../utils/methods/network';

export const signIn = (username: string) => {
  if (!username) {
    return Alert.alert('Username field cannot be left blank');
  }

  //
};

export const signOut = () => {
  //
};
