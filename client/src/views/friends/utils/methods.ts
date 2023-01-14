import { Alert } from 'react-native';
import { serverRequest } from '../../../utils/methods/network';

export const getFriends = async () => {};

export const searchUsers = async (searchTerm: string, setRes: Function) => {
  try {
    const res = await serverRequest(
      'user/post?subpath=search',
      {
        body: JSON.stringify({
          searchTerm,
        }),
      },
      true
    );

    setRes(res?.results ?? []);
    return res?.results ?? [];
  } catch (error: any) {
    Alert.alert(error.message);
  }
};
