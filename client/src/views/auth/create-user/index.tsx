import React from 'react';
import { View, TextInput } from 'react-native';
import { useUser } from '../../../components/context/user';
import Button from '../../../components/input/button/Button';

import styles from './styles';

const CreateUserView = ({ navigation }) => {
  const { signIn } = useUser();
  const [username, setUsername] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a username..."
          onChangeText={setUsername}
        />
        <Button
          style={styles.button}
          text={{
            content: 'Continue'.toLocaleUpperCase(),
            style: styles.buttonText,
          }}
          onPress={() => signIn(username)}
        />
      </View>
    </View>
  );
};

export default CreateUserView;
