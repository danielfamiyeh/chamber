import React from 'react';
import { upperFirst } from 'lodash';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ContentType } from '@danielfamiyeh/chamber-common';

import Button from '../../../../../components/input/button/Button';

import styles from './ContentSelect.styles';

const contentTypes: { type: ContentType; icon: string }[] = [
  { type: 'text', icon: 'text-fields' },
  { type: 'image', icon: 'image' },
];

const ContentSelect = (props: ContentSelectProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.promptText}>
        What content would you like to upload?
      </Text>
      <View style={styles.selectContainer}>
        {contentTypes.map(({ type, icon }) => {
          return (
            <Button
              style={styles.contentTypeContainer}
              onPress={() => props.setContentType(type)}
            >
              <Icon name={icon} size={72} style={styles.contentTypeIcon} />
              <Text style={styles.contentTypeText}>{upperFirst(type)}</Text>
            </Button>
          );
        })}
      </View>
    </View>
  );
};

interface ContentSelectProps {
  setContentType: Function;
}

export default ContentSelect;
