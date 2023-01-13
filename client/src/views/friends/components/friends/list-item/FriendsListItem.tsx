import React from 'react';
import { View } from 'react-native';
import { User } from '@danielfamiyeh/chamber-common';

import styles from './FriendsListItem.styles';

const FriendsListItem = (props: FriendsListItemProps) => {
  return <View styles={styles.container}></View>;
};

interface FriendsListItemProps {
  user: User;
  addedAt: Date;
}

export default FriendsListItem;
