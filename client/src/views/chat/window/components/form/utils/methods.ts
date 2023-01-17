import { MessageContentType } from '@danielfamiyeh/chamber-common';
import { Alert } from 'react-native';
import { QueryClient } from 'react-query';
import { serverRequest } from '../../../../../../utils/methods/network';

export const onSendMessage = (
  chatId: string,
  contentValue: string,
  contentType: MessageContentType,
  setContentValue: Function,
  setContentType: Function,
  queryClient: QueryClient
) => {
  serverRequest(
    'chat/put?subpath=message',
    {
      body: JSON.stringify({ chatId, contentType, contentValue }),
    },
    true
  )
    .then(({ message, error }) => {
      if (error) {
        throw new Error(error);
      }

      if (!message) {
        throw new Error('Unable to send message');
      }

      queryClient.invalidateQueries('messages');
      setContentType('text');
      setContentValue('');
    })
    .catch(({ message }) => Alert.alert('An error occured', message));
};

export const onSelectImage = () => {};
