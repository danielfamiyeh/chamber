import React from 'react';
import { useQuery } from 'react-query';
import { useRoute } from '@react-navigation/native';
import { ActivityIndicator, FlatList, View } from 'react-native';

import { getMessages } from './utils/methods';

import styles from './styles';

const ChatWindowView = () => {
  const { params } = useRoute();

  const { data, isLoading } = useQuery('messages', () =>
    getMessages(params?.chatId ?? '')
  );

  return isLoading ? (
    <View style={{ flex: 1 }}>
      <ActivityIndicator />
    </View>
  ) : (
    <FlatList
      data={data}
      style={styles.container}
      keyExtractor={({ _id }) => _id}
    />
  );
};

export default ChatWindowView;
