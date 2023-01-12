import React from 'react';
import { Text, View } from 'react-native';
import { ContentType } from '@danielfamiyeh/chamber-common';

import Button from '../../../../../components/input/button/Button';
import ImageInput from './image/ImageInput';
import TextInput from './text/TextInput';

import styles from './ContentInput.styles';

const ContentInput = (
  props: ContentInputProps & {
    onSubmit: ({ current }: { current: string }) => void;
  }
) => {
  const contentValueRef = React.useRef('');
  const { current: contentValue } = contentValueRef;
  const setContentValue = (text: string) => (contentValueRef.current = text);

  const Component = React.useMemo(
    () => () => {
      switch (props.contentType) {
        case 'text':
          return (
            <TextInput
              {...props}
              contentValue={contentValue}
              setContentValue={setContentValue}
            />
          );

        case 'image':
          return (
            <ImageInput
              {...props}
              contentValue={contentValue}
              setContentValue={setContentValue}
            />
          );

        default:
          return null;
      }
    },
    [props, contentValue]
  );

  return (
    <View style={styles.container}>
      <Component />
      <Button
        style={styles.changeTypeButton}
        onPress={() => {
          props.setContentType();
          setContentValue('');
        }}
      >
        <Text style={styles.changeTypeButtonText}>Change Content Type</Text>
      </Button>

      <Button
        style={styles.submitButton}
        onPress={() => props.onSubmit(contentValueRef)}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </Button>
    </View>
  );
};

export interface ContentInputProps {
  contentType: ContentType;
  setContentType: Function;
}

export interface ContentInputComponentProps extends ContentInputProps {
  contentValue: string;
  setContentValue: Function;
}

export default ContentInput;
