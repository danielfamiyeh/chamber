import React from 'react';
import { GestureResponderEvent, Text, View } from 'react-native';

import Button from '../../button/Button';

import styles from './FormFooter.styles';

const FormFooter = (props: FormFooterProps) => {
  return (
    <View style={styles.container}>
      <Button style={styles.submitButton} onPress={() => props.onSubmit()}>
        <Text style={styles.submitButtonText}>
          {props.submitButtonText ?? 'Submit'}
        </Text>
      </Button>
      {props.children}
    </View>
  );
};

export interface FormFooterProps {
  onSubmit: (evt: GestureResponderEvent) => void;
  submitButtonText?: string;
  children?: any;
}

export default FormFooter;
