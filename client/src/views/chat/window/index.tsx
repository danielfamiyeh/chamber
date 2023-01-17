import React from 'react';
import { useQuery } from 'react-query';
import { useRoute } from '@react-navigation/native';
import { ActivityIndicator, FlatList, View } from 'react-native';

import ChatBubble from './components/bubble/ChatBubble';
import ChatForm from './components/form/ChatForm';

import { useUser } from '../../../utils/hooks/useUser';
import { getMessages } from './utils/methods';
import styles from './styles';

const ChatWindowView = () => {
  const { params } = useRoute();

  const chatId = params.chatId ?? '';
  const { data, isLoading } = useQuery('messages', () => getMessages(chatId));

  const { user, isLoadingUserData } = useUser();

  return isLoading || isLoadingUserData ? (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ChatBubble {...item} />}
        style={styles.container}
        keyExtractor={({ _id }) => _id}
      />
      <ChatForm chatId={chatId} />
    </View>
  );
};

export default ChatWindowView;
