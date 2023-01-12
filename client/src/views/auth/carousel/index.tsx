import React from 'react';
import { Text, View } from 'react-native';

import CarouselSlide from './components/slide/CarouselSlide';
import Button from '../../../components/input/button/Button';

import { slides } from './utils/constants';
import styles from './styles';

const Carousel = () => {
  const [state, _setState] = React.useState({
    slideIdx: 0,
  });

  const setState = (ns: object) =>
    _setState((_state) => ({ ..._state, ...ns }));

  const currentSlide = React.useMemo(
    () => slides[state.slideIdx],
    [state.slideIdx]
  );

  return (
    <View style={styles.container}>
      <CarouselSlide
        image={currentSlide.image}
        title={currentSlide.title}
        description={currentSlide.description}
      />
      <View style={styles.ctaContainer}>
        <Button disabled style={styles.controlButton}>
          <Text>Prev.</Text>
        </Button>
        <Button style={styles.controlButton}>
          <Text>Next.</Text>
        </Button>
      </View>
    </View>
  );
};

export interface CarouselState {
  slideIdx: number;
}

export default Carousel;
