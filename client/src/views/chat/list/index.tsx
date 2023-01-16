import React from 'react';
import { View } from 'react-native';
import { Chat } from '@danielfamiyeh/chamber-common';
import { FlatList } from 'react-native-gesture-handler';

import ChatListItem from './components/item/ChatListItem';
import ChatListZeroState from './components/zero-state/ChatListZeroState';

import { scaleY } from '../../../utils/methods/scaleable-units';
import styles from './styles';

const chats: Chat[] = [];

const ChatListView = ({ navigation: { navigate } }) => {
  return (
    <FlatList
      data={chats}
      contentContainerStyle={styles.container}
      ListEmptyComponent={() => <ChatListZeroState navigate={navigate} />}
      ItemSeparatorComponent={() => <View style={{ height: scaleY(4) }} />}
      renderItem={({ item: { _id, messages, recipients } }) => (
        <ChatListItem
          lastMessage={messages[messages.length - 1]}
          recipients={recipients}
          navigate={navigate}
          chatId={_id}
        />
      )}
    />
  );
};

export default ChatListView;
