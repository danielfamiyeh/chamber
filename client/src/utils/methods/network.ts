import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { API_SERVER_URL } from '../../config';

export const serverRequest = async (
  path: string,
  options: RequestInit = {},
  withAuth = false
) => {
  let authHeader = {};
  try {
    if (withAuth) {
      const { token } = JSON.parse(
        (await AsyncStorage.getItem('@session')) ?? '{}'
      );
      token && (authHeader = { Authorization: `Bearer ${token}` });
    }

    const res = await (
      await fetch(`${API_SERVER_URL}/${path}`, {
        headers: {
          'Content-Type': 'application/json',
          ...authHeader,
        },
        method: 'post',
        ...options,
      })
    ).json();

    return res;
  } catch (error: any) {
    Alert.alert('An error occurred', error.message);
  }
};
