import { Alert } from 'react-native';
import { serverRequest } from '../../../utils/methods/network';

export const getFriends = async () => {};

export const searchUsers = async (searchTerm: string) => {
  try {
    const res = await serverRequest(
      `user/post?subpath=search&query=${searchTerm}`
    );

    console.log({ res });
  } catch (error: any) {
    Alert.alert(error.message);
  }
};
