import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Relation } from '@danielfamiyeh/chamber-common';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Button from '../../../../../components/input/button/Button';

import { GestureEventHandler } from '../../../../../../types';
import FriendsListItem from '../list-item/FriendsListItem';
import styles from './FriendsList.styles';

const FriendsList = (props: FriendsListProps) => {
  return props.relations?.length ? (
    <FlatList
      data={props.relations}
      style={styles.container}
      renderItem={({ item }) => (
        <FriendsListItem {...item} navigate={props.navigate} />
      )}
      contentContainerStyle={styles.contentContainer}
    />
  ) : (
    <View style={styles.listEmptyContainer}>
      <Icon name="sad-cry" style={styles.listEmptyIcon} size={96} />
      <Text style={styles.listEmptyText}>How sad.</Text>
      <Text style={styles.listEmptyText}>You have no friends!</Text>
      <Button style={styles.searchButton} onPress={props.onSearch}>
        <Text style={styles.searchButtonText}>Find Some</Text>
      </Button>
    </View>
  );
};

interface FriendsListProps {
  relations: Relation[];
  onSearch: GestureEventHandler;
  navigate: Function;
}

export default FriendsList;
