import React, { MutableRefObject } from 'react';
import { TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../../../../components/input/button/Button';

import styles from './SearchBar.styles';

const SearchBar = (props: SearchBarProps) => {
  const onClearAndBlur = () => {
    if (props.value) {
      props.onClearInput();
      props.inputRef.current?.blur();
    }
  };

  return (
    <Pressable style={styles.container}>
      <TextInput
        value={props.value}
        ref={props.inputRef}
        style={styles.input}
        onChangeText={props.onChange}
        placeholder="Search a username..."
      />
      <Button style={styles.iconContainer} onPress={onClearAndBlur}>
        <Icon
          size={24}
          style={styles.icon}
          name={props.value ? 'close' : 'search'}
        />
      </Button>
    </Pressable>
  );
};

interface SearchBarProps {
  value: string;
  onClearInput: () => void;
  onChange: (searchTerm: string) => void;
  inputRef: MutableRefObject<TextInput | undefined>;
}

export default SearchBar;
