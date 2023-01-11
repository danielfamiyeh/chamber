import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import ChatListItem from './components/item/ChatListItem';

import { testChat } from '../../../utils/data/test/chat';
import styles from './styles';
import { View } from 'react-native';
import { scaleY } from '../../../utils/methods/scaleable-units';

const ChatListView = ({ navigation: { navigate } }) => {
  const chats = React.useMemo(
    () => new Array(5).fill(null).map((_) => testChat),
    []
  );

  return (
    <FlatList
      data={chats}
      contentContainerStyle={styles.container}
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
