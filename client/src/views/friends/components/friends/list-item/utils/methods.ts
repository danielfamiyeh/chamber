import { Alert } from 'react-native';

export const onSendMessage =
  (_id: string, username: string, navigate: Function) => () => {
    Alert.alert(
      'Creat Chat',
      `Would you like to create a chat with ${username}?`,
      [
        { text: 'Cancel', style: 'destructive' },
        { text: 'Continue', onPress: () => navigate('Chat', { _id }) },
      ]
    );
  };

export const onNavigateProfile = (_id: string, navigate: Function) => () =>
  navigate('Profile', { _id });
