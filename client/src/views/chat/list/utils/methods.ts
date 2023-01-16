import { Alert } from 'react-native';
import { serverRequest } from '../../../../utils/methods/network';

export const getChats = () =>
  serverRequest('chat/post?subpath=chat', {}, true)
    .then(({ chats }) => chats)
    .catch(({ message }) => Alert.alert(message));
