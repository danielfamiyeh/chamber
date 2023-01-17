import { Alert } from 'react-native';
import { serverRequest } from '../../../../../../utils/methods/network';

export const onSendMessage =
  (recipientId: string, username: string, navigate: Function) => () => {
    Alert.alert(
      'Creat Chat',
      `Would you like to create a chat with ${username}?`,
      [
        { text: 'Cancel', style: 'destructive' },
        {
          text: 'Continue',
          onPress: async () => {
            serverRequest(
              'chat/put?subpath=chat',
              {
                body: JSON.stringify({ recipients: [recipientId] }),
              },
              true
            )
              .then(({ chat: { _id: chatId } = { _id: '' }, error }) => {
                if (error ?? !chatId) {
                  throw new Error(error ?? 'Could not create chat');
                }

                if (chatId) {
                  navigate('MessageFlow', { chatId });
                }
              })
              .catch(({ message }) =>
                Alert.alert('An error occurred', message)
              );
          },
        },
      ]
    );
  };

export const onNavigateProfile = (_id: string, navigate: Function) => () =>
  navigate('Profile', { _id });
