import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { serverRequest } from '../../../../../../utils/methods/network';
import { toast } from '../../../../../../utils/methods/toast';

export const onSendMessage = (id: string, navigate: Function) => () => {
  navigate('CreateChat', {
    recipients: [id],
  });
};

export const onAddFriend =
  (userId: string, username: string, isFriend: boolean) => async () => {
    if (isFriend) {
      return;
    }

    try {
      const session = JSON.parse(
        (await AsyncStorage.getItem('@session')) ?? '{}'
      );

      if (!session?._id) {
        throw new Error('Please sign out and back in again');
      }

      const res = await serverRequest(
        'relation/put?subpath=request',
        {
          body: JSON.stringify({
            relationType: 'friend',
            _id: session._id,
            userId,
          }),
        },
        true
      );

      if (res?.success) {
        toast.success('Success', `Added ${username} as a friend`);
      } else if (res?.error) {
        throw new Error(res.error);
      }
    } catch (error: any) {
      Alert.alert('An error occurred', error.message);
    }
  };
