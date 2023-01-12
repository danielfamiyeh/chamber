import React from 'react';
import { startCase } from 'lodash';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { authForm, AuthMethod } from './utils/constants';
import styles from './styles';
import FormMain from '../../../components/input/form/main/FormMain';

const AuthMain = ({ navigation: { navigate } }) => {
  const { params = {} } = useRoute();
  const { method = 'signIn' } = params;

  const onSubmit = React.useCallback(() => {}, []);
  const form = React.useMemo(() => authForm[method as AuthMethod], [method]);

  return (
    <View style={styles.container}>
      <FormMain
        model={form.model}
        onSubmit={onSubmit}
        title={startCase(method)}
        onValidate={form.validate}
      />
    </View>
  );
};

export default AuthMain;
