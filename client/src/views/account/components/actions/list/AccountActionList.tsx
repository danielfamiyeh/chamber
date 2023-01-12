import React from 'react';
import { Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSession } from '../../../../../components/context/session';
import AccountAction from '../main/AccountAction';

import { Session } from '../../../../../../types';
import { actions } from './utils/constants';

const AccountActionList = (props: AccountActionListProps) => {
  const { signOut } = useSession();

  const actionMethods = React.useMemo(
    () => [
      () =>
        Alert.alert('Confirm', 'Are you sure you would like to sign out?', [
          { text: 'Cancel' },
          { text: 'Confirm', onPress: signOut, style: 'destructive' },
        ]),
      () =>
        Alert.alert(
          'Confirm',
          'Are you sure you would like to delete your account?',
          [
            { text: 'Cancel' },
            { text: 'Confirm', onPress: signOut, style: 'destructive' },
          ]
        ),
    ],
    [signOut]
  );
  return (
    <FlatList
      data={actions}
      renderItem={({ item: { name, iconName }, index }) => (
        <AccountAction
          Icon={() => <Icon name={iconName} size={20} />}
          numActions={actions.length}
          onPress={actionMethods[index]}
          index={index}
          name={name}
        />
      )}
    />
  );
};

interface AccountActionListProps {
  session: Session;
}

export default AccountActionList;
