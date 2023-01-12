import React from 'react';
import { Image, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ContentType } from '@danielfamiyeh/chamber-common';

import Button from '../../../../../components/input/button/Button';

import styles from './ContentInput.styles';

const ContentInput = (props: ContentInputProps) => {
  const Component = React.useMemo(
    () => () => {
      switch (props.contentType) {
        case 'text':
          return (
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputLabel}>What's on your mind?</Text>
              <TextInput
                multiline
                style={styles.textInput}
                placeholder="Type something here...."
              />
            </View>
          );

        case 'image':
          return <Image style={styles.image} />;

        default:
          return null;
      }
    },
    [props.contentType]
  );

  return (
    <View style={styles.container}>
      <Component />
      <Button
        style={styles.changeTypeButton}
        onPress={() => props.setContentType()}
      >
        <Text style={styles.changeTypeButtonText}>Change Content Type</Text>
      </Button>
    </View>
  );
};

export interface ContentInputProps {
  contentType: ContentType;
  setContentType: Function;
  contentValue: string;
  setContentValue: Function;
}

export default ContentInput;
