import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { ActivityIndicator, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ChatListItem from './components/item/ChatListItem';
import ChatListZeroState from './components/zero-state/ChatListZeroState';

import { scaleY } from '../../../utils/methods/scaleable-units';
import { getChats } from './utils/methods';

import styles from './styles';

const ChatListView = ({ navigation: { navigate } }) => {
  const { data, loading } = useQuery('chats', getChats);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const queryClient = useQueryClient();

  return loading ? (
    <View style={{ flex: 1 }}>
      <ActivityIndicator />
    </View>
  ) : (
    <FlatList
      data={data ?? []}
      refreshing={isRefreshing}
      onRefresh={() => {
        queryClient.invalidateQueries('chats');
      }}
      contentContainerStyle={styles.container}
      ListEmptyComponent={() => <ChatListZeroState navigate={navigate} />}
      ItemSeparatorComponent={() => <View style={{ height: scaleY(4) }} />}
      renderItem={({ item }) => <ChatListItem {...item} navigate={navigate} />}
    />
  );
};

export default ChatListView;
