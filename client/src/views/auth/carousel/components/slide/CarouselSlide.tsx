import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './CarouselSlide.styles';

const CarouselSlide = (props: CarouselSlide) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>chamber</Text>
      <View style={styles.titleDivider} />
      <Image style={styles.image} source={props.image} />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
};

export interface CarouselSlide {
  image: string;
  title: string;
  description: string;
}

export default CarouselSlide;
