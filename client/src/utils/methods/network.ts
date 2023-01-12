import AsyncStorage from '@react-native-async-storage/async-storage';

import { ServerRequestReturnType } from '../../../types';
import { API_SERVER_URL } from '../../config';
import { toast } from './toast';

export const serverRequest = async <T>(
  path: string,
  options: RequestInit = {},
  returnType: ServerRequestReturnType = 'json',
  withAuth = false
): Promise<T> => {
  let authHeader;
  try {
    if (withAuth) {
      const { token } = JSON.parse(
        (await AsyncStorage.getItem('@session')) ?? '{}'
      );
      token && (authHeader = { Authorization: `Bearer ${token}` });
    }

    const res = await (
      await fetch(`${API_SERVER_URL}/${path}`, {
        ...options,
        method: options.method ?? 'GET',
        headers: {
          'Content-type': 'application/json',
          ...(options.headers ?? {}),
          ...(authHeader ?? {}),
        },
      })
    )[returnType]();

    if (res?.error) {
      throw new Error(res.error);
    }
    return res;
  } catch (error: any) {
    const message = `${options.method} request error to api endpoint ${path}\n${error.message}`;
    return toast.error('', message);
  }
};
