import React from 'react';
import { Alert, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary } from 'react-native-image-picker';

import Button from '../../../../../../components/input/button/Button';

import { ContentInputComponentProps } from '../ContentInput';
import styles from './ImageInput.styles';

const ImageInput = (props: ContentInputComponentProps) => {
  const [contentValue, _setContentValue] = React.useState('');
  const setContentValue = (text: string) => {
    props.setContentValue(text);
    _setContentValue(text);
  };

  return contentValue ? (
    <Button
      style={styles.imageContainer}
      onPress={() =>
        Alert.alert('Change photo', 'Would you like to reupload your photo?', [
          { text: 'Cancel' },
          {
            text: 'Change',
            style: 'destructive',
            onPress: () => setContentValue(''),
          },
        ])
      }
    >
      <Image
        style={styles.image}
        source={{ uri: `data:image/png;base64,${contentValue}` }}
      />
    </Button>
  ) : (
    <Button
      style={styles.uploadImageButton}
      onPress={() =>
        launchImageLibrary({
          quality: 0.1,
          mediaType: 'photo',
          includeBase64: true,
        })
          .then(({ assets = [{ base64: '' }] }) => {
            const [{ base64 }] = assets;
            setContentValue(base64 ?? '');
          })
          .catch(({ message }) => Alert.alert('An error occured', message))
      }
    >
      <Icon name="image" size={48} style={styles.uploadImageButtonIcon} />
      <Text style={styles.uploadImageButtonText}>Upload an Image</Text>
    </Button>
  );
};

export default ImageInput;
