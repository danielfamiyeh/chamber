import React from 'react';
import { View, TextInput } from 'react-native';
import Button from '../../../components/input/button/Button';

import styles from './styles';

const CreateUserView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.textInput} />
        <Button
          style={styles.button}
          text={{ content: 'Continue' }}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default CreateUserView;
