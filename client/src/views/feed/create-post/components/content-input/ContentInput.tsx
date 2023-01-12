import React from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ContentType } from '@danielfamiyeh/chamber-common';
import { launchImageLibrary } from 'react-native-image-picker';

import Button from '../../../../../components/input/button/Button';

import styles from './ContentInput.styles';

const ContentInput = (props: ContentInputProps) => {
  console.log(props.contentValue.slice(0, 10));
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
          return props.contentValue ? (
            <Image
              style={styles.image}
              source={{ uri: `data:image/png;base64,${props.contentValue}` }}
            />
          ) : (
            <Button
              style={styles.uploadImageButton}
              onPress={() =>
                launchImageLibrary({
                  quality: 1,
                  mediaType: 'photo',
                  includeBase64: true,
                })
                  .then(({ assets = [] }) => {
                    props.setContentValue(assets[0].base64 ?? '');
                  })
                  .catch(({ message }) =>
                    Alert.alert('An error occured', message)
                  )
              }
            >
              <Icon
                name="image"
                size={48}
                style={styles.uploadImageButtonIcon}
              />
              <Text style={styles.uploadImageButtonText}>Upload an Image</Text>
            </Button>
          );

        default:
          return null;
      }
    },
    [props]
  );

  return (
    <View style={styles.container}>
      <Component />
      <Button
        style={styles.changeTypeButton}
        onPress={() => {
          props.setContentType();
          props.setContentValue('');
        }}
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
