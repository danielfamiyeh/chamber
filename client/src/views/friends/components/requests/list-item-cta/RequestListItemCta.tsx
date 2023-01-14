import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../../../../../components/input/button/Button';

import { ButtonProps } from '../../../../../../types';
import ThemeManager from '../../../../../utils/ui/ThemeManger';
import styles, { iconStyleProps } from './RequestListItemCta.styles';
import {
  onAcceptRequest,
  onCancelRequest,
  onRejectRequest,
} from './utils/methods';

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
  const Main = React.useMemo(
    () => () => {
      switch (props.direction) {
        case 'incoming':
          return (
            <>
              <AcceptButton onPress={() => onAcceptRequest(props.requestId)} />
              <RejectButton onPress={() => onRejectRequest(props.requestId)} />
            </>
          );

        case 'outgoing':
          return (
            <>
              <RejectButton onPress={() => onCancelRequest(props.requestId)} />
            </>
          );
      }
    },
    [props.direction, props.requestId]
  );
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
};

export interface RequestListItemCtaProps {
  requestId: string;
  direction: 'incoming' | 'outgoing';
}

export default RequestListItemCta;
