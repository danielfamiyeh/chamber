import React from 'react';
import { Image, Text } from 'react-native';
import { ContentType } from '@danielfamiyeh/chamber-common';

import styles from './Content.styles';

export const renderContent = (type: ContentType, value: string) => {
  switch (type) {
    case 'image': {
      return (
        <Image
          source={{ uri: `data:image/png;base64, ${value}` }}
          style={styles.image}
        />
      );
    }

    case 'text': {
      return <Text>{value}</Text>;
    }
    default:
      return null;
  }
};
