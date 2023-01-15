import { upperFirst } from 'lodash';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { serverRequest } from '../../../../../../utils/methods/network';
import { toast } from '../../../../../../utils/methods/toast';
import { QueryClient } from 'react-query';

type RequestAction = 'accept' | 'reject' | 'cancel';

const onAction = async (action: RequestAction, requestId: string) => {
  try {
    const session = JSON.parse(
      (await AsyncStorage.getItem('@session')) ?? '{}'
    );

    if (!session?._id) {
      throw new Error('Please sign out and back in again');
    }

    const res = await serverRequest(
      'relation/post?subpath=request',
      {
        body: JSON.stringify({
          _id: session._id,
          requestId,
          action,
        }),
      },
      true
    );

    if (res?.error) {
      throw new Error(res.error);
    }

    if (res?.success) {
      toast.success('Success', `Friend request ${action}ed`);
    }
  } catch (error: any) {
    Alert.alert('An error occurred', error.message);
  }
};

const onAlert = (
  action: RequestAction,
  requestId: string,
  username: string,
  queryClient: QueryClient
) => {
  const title = `${upperFirst(action)} request`;
  const msg = ` ${title} ${action === 'cancel' ? 'to' : 'from'} ${username}`;

  Alert.alert(title, msg, [
    { text: 'Cancel', style: 'cancel' },
    {
      text: 'Continue',
      onPress: () =>
        onAction(action, requestId).then(() =>
          queryClient.invalidateQueries('user')
        ),
    },
  ]);
};

export const onAcceptRequest = (
  requestId: string,
  username: string,
  queryClient: QueryClient
) => onAlert('accept', requestId, username, queryClient);
export const onRejectRequest = (
  requestId: string,
  username: string,
  queryClient: QueryClient
) => onAlert('reject', requestId, username, queryClient);
export const onCancelRequest = (
  requestId: string,
  username: string,
  queryClient: QueryClient
) => onAlert('cancel', requestId, username, queryClient);
