import React, { MutableRefObject } from 'react';
import { TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../../../../components/input/button/Button';

import styles from './SearchBar.styles';

const SearchBar = (props: SearchBarProps) => {
  return (
    <Pressable style={styles.container}>
      <TextInput
        ref={props.inputRef}
        value={props.value}
        style={styles.input}
        onChangeText={props.onChange}
        placeholder="Search a username..."
      />
      <Button style={styles.iconContainer}>
        <Icon name="search" size={24} style={styles.icon} />
      </Button>
    </Pressable>
  );
};

interface SearchBarProps {
  value: string;
  inputRef: MutableRefObject<TextInput>;
  onChange: (searchTerm: string) => void;
}

export default SearchBar;
