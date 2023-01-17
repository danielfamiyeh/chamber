import { Alert } from 'react-native';
import { serverRequest } from '../../../../utils/methods/network';

export const getMessages = (chatId: string) =>
  serverRequest(
    'chat/post?subpath=message',
    { body: JSON.stringify({ chatId }) },
    true
  )
    .then(({ error, messages }) => {
      if (error) {
        throw new Error(error);
      }

      if (!messages) {
        throw new Error("Couldn't retrieve messages for this chat");
      }

      return messages;
    })
    .catch(({ message }) => Alert.alert('An error occurred', message));
