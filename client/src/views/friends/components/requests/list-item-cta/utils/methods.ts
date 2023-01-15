import { upperFirst } from 'lodash';
import { Alert } from 'react-native';
import { serverRequest } from '../../../../../../utils/methods/network';

type RequestAction = 'accept' | 'reject' | 'cancel';

const onAction = (action: RequestAction, requestId: string) => {};

const onAlert = (
  action: RequestAction,
  requestId: string,
  username: string
) => {
  const title = `${upperFirst(action)} request`;
  const msg = ` ${title} ${action === 'cancel' ? 'to' : 'from'} ${username}`;

  Alert.alert(title, msg, [
    { text: 'Cancel', style: 'cancel' },
    { text: 'Continue', onPress: () => onAction(action, requestId) },
  ]);
};

export const onAcceptRequest = (requestId: string, username: string) =>
  onAlert('accept', requestId, username);
export const onRejectRequest = (requestId: string, username: string) =>
  onAlert('reject', requestId, username);
export const onCancelRequest = (requestId: string, username: string) =>
  onAlert('cancel', requestId, username);
