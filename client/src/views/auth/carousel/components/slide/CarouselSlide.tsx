import React from 'react';
import { Text, View } from 'react-native';

import styles from './CarouselSlide.styles';

const CarouselSlide = (props: CarouselSlide) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>chamber.</Text>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
};

export interface CarouselSlide {
  title: string;
  description: string;
}

export default CarouselSlide;
