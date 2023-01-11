import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AccountAction from '../main/AccountAction';
import { actions } from './utils/constants';

const AccountActionList = (props: AccountActionListProps) => {
  return (
    <FlatList
      data={actions}
      renderItem={({ item: { name, iconName }, index }) => (
        <AccountAction
          name={name}
          Icon={() => <Icon name={iconName} size={20} />}
          onPress={() => {}}
          index={index}
          numActions={actions.length}
        />
      )}
    />
  );
};

interface AccountActionListProps {}

export default AccountActionList;
