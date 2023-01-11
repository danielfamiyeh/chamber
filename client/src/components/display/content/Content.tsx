import {
  Content as TContent,
  ContentType,
} from '@danielfamiyeh/chamber-common';
import { Image, Text, View } from 'react-native';
import React from 'react';

import styles from './Content.styles';

export const renderContent = (type: ContentType, value: string) => {
  switch (type) {
    case 'image': {
      return <Image source={{ uri: value }} style={styles.image} />;
    }

    case 'text': {
      return <Text>{value}</Text>;
    }
    default:
      return null;
  }
};

const Content = (props: TContent<any>) => {
  return (
    <View style={styles.container}>
      {renderContent(props.type, props.value)}
    </View>
  );
};

export default Content;
