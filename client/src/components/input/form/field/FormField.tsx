import React from 'react';
import { startCase } from 'lodash';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import styles from './FormField.styles';

const FormField = (props: FormFieldProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{startCase(props.label)}</Text>
      <TextInput
        style={styles.inputContainer}
        value={props.value.toString()}
        onChangeText={(value: string) =>
          props.onChange(props.value.constructor(value))
        }
      />
    </View>
  );
};

export interface FormFieldProps {
  label: string;
  value: string | number;
  onChange: (val: string | number) => void;
}

export default FormField;
