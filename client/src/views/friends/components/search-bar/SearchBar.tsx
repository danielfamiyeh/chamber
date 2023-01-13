import React from 'react';
import { TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../../../../components/input/button/Button';

import styles from './SearchBar.styles';

const SearchBar = (props: SearchBarProps) => {
  return (
    <Pressable style={styles.container}>
      <TextInput style={styles.input} placeholder="Search a username..." />
      <Button style={styles.iconContainer} onPress={props.onSubmit}>
        <Icon name="search" size={24} style={styles.icon} />
      </Button>
    </Pressable>
  );
};

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default SearchBar;
