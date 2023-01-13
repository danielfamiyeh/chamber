import React from 'react';
import { User } from '@danielfamiyeh/chamber-common';
import { FlatList } from 'react-native-gesture-handler';

import styles from './FriendsList.styles';

const FriendsList = (props: FriendsListProps) => {
  return (
    <FlatList
      data={props.friends}
      style={styles.container}
      renderItem={({ item }) => null}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

interface FriendsListProps {
  friends: { user: User; friendsSince: Date }[];
}

export default FriendsList;
