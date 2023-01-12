import React from 'react';
import { startCase } from 'lodash';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import styles from './FormField.styles';

const FormField = (props: FormFieldProps) => {
  const [value, setValue] = React.useState(props.value ?? '');
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
              defaultValue={value.toString()}
              onChangeText={(_value: string) => setValue(_value)}
              onEndEditing={() =>
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
