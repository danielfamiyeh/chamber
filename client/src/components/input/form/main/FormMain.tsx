import React from 'react';
import { Alert, GestureResponderEvent, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import FormFooter from '../footer/FormFooter';
import FormField from '../field/FormField';

import { FormModel } from '../../../../../types';
import styles from './FormMain.styles';

const FormMain = (props: FormMainProps) => {
  const [model, setModel] = React.useState(props.model);

  const onSubmit = (evt: GestureResponderEvent) => {
    evt.preventDefault();
    try {
      props.onValidate(model);
    } catch (error: any) {
      Alert.alert('Changes required', error.message);
    }

    props.onSubmit(model);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.titleDivider} />
      {props.AboveForm}
      <FlatList
        style={styles.formContainer}
        data={Object.entries(model)}
        ItemSeparatorComponent={() => (
          <View style={styles.formFieldSeparator} />
        )}
        renderItem={({ item: [label, value] }) => (
          <FormField
            label={label}
            value={value}
            onChange={(newValue) =>
              setModel((_model) => ({ ..._model, [label]: newValue }))
            }
          />
        )}
        ListFooterComponent={() => (
          <FormFooter onSubmit={onSubmit}>{props.FooterChildren}</FormFooter>
        )}
      />
    </View>
  );
};

interface FormMainProps {
  title: string;
  model: FormModel;
  onValidate: Function;
  AboveForm?: React.ReactNode;
  FooterChildren?: React.ReactNode;
  onSubmit: Function;
  style?: object;
}

export default FormMain;
