import React from 'react';
import { Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSession } from '../../../../../components/context/session';
import AccountAction from '../main/AccountAction';

import { actions } from './utils/constants';
import { toast } from '../../../../../utils/methods/toast';
import { serverRequest } from '../../../../../utils/methods/network';

const AccountActionList = () => {
  const { signOut } = useSession();

  const onDeleteAccount = async () => {
    try {
      const res = await serverRequest('user/delete?subpath=user', {}, true);
      if (res?.error) {
        throw new Error(res.error);
      }

      if (res.success) {
        toast.success('Success', 'Account successfully deleted');
        signOut();
      } else {
        throw new Error('We were unable to delete your account');
      }
    } catch (error: any) {
      Alert.alert('An error occurred', error.message);
    }
  };

  const actionMethods = [
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
          { text: 'Confirm', onPress: onDeleteAccount, style: 'destructive' },
        ]
      ),
  ];
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

export default AccountActionList;
