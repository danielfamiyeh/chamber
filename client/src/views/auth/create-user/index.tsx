import React from 'react';
import { View, TextInput } from 'react-native';
import { Session, User } from '../../../../types';
import { useSession } from '../../../components/context/session';

import { useUser } from '../../../components/context/user';
import Button from '../../../components/input/button/Button';

import styles from './styles';

const CreateUserView = () => {
  const { setSession } = useSession();
  const { signUp, setUser } = useUser();

  const [username, setUsername] = React.useState('');

  const onSignUp = (user: User, session: Session) => {
    setUser(user);
    setSession(session);
  };

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
          onPress={() =>
            signUp(username).then(({ user, session }) =>
              onSignUp(user, session)
            )
          }
        />
      </View>
    </View>
  );
};

export default CreateUserView;
