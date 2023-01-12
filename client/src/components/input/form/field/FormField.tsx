import React from 'react';
import { startCase } from 'lodash';
import { Text, TextInput, View } from 'react-native';

import styles from './FormField.styles';

const FormField = (props: FormFieldProps) => {
  const [initialValue] = React.useState(String(props.value ?? ''));

  const InputField = React.useMemo(
    () => () => {
      switch (props.value.constructor.name) {
        case 'String':
        case 'Number':
          return (
            <TextInput
              keyboardType={
                props.value.constructor.name === 'Number'
                  ? 'numeric'
                  : 'default'
              }
              style={styles.textInput}
              defaultValue={initialValue}
              onChangeText={(value) =>
                props.onChange(props.value.constructor(value))
              }
              {...props.fieldProps}
            />
          );
        default:
          return null;
      }
    },
    [props]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{startCase(props.label)}</Text>
      <InputField />
    </View>
  );
};

export interface FormFieldProps {
  label: string;
  fieldProps?: object;
  value: string | number;
  onChange: (val: string | number) => void;
}

export default FormField;
