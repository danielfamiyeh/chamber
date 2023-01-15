import React from 'react';
import { View } from 'react-native';
import { useQueryClient } from 'react-query';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../../../../../components/input/button/Button';

import {
  onAcceptRequest,
  onCancelRequest,
  onRejectRequest,
} from './utils/methods';
import { ButtonProps } from '../../../../../../types';
import ThemeManager from '../../../../../utils/ui/ThemeManger';
import styles, { iconStyleProps } from './RequestListItemCta.styles';

const AcceptButton = (props: ButtonProps) => {
  return (
    <Button style={styles.button} onPress={props.onPress}>
      <Icon
        color={ThemeManager.theme.success}
        name="check-circle"
        {...iconStyleProps}
      />
    </Button>
  );
};

const RejectButton = (props: ButtonProps) => {
  return (
    <Button style={styles.button} onPress={props.onPress}>
      <Icon
        {...iconStyleProps}
        color={ThemeManager.theme.error}
        name="cancel"
      />
    </Button>
  );
};

const RequestListItemCta = (props: RequestListItemCtaProps) => {
  const queryClient = useQueryClient();

  const Main = React.useMemo(
    () => () => {
      switch (props.direction) {
        case 'incoming':
          return (
            <>
              <AcceptButton
                onPress={() =>
                  onAcceptRequest(props.requestId, props.username, queryClient)
                }
              />
              <RejectButton
                onPress={() =>
                  onRejectRequest(props.requestId, props.username, queryClient)
                }
              />
            </>
          );

        case 'outgoing':
          return (
            <>
              <RejectButton
                onPress={() =>
                  onCancelRequest(props.requestId, props.username, queryClient)
                }
              />
            </>
          );
      }
    },
    [props.direction, props.requestId, props.username]
  );
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
};

export interface RequestListItemCtaProps {
  direction: 'incoming' | 'outgoing';
  requestId: string;
  username: string;
}

export default RequestListItemCta;
