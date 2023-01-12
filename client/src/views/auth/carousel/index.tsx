import React from 'react';
import { Text, View } from 'react-native';

import CarouselSlide from './components/slide/CarouselSlide';
import Button from '../../../components/input/button/Button';

import { slides } from './utils/constants';
import styles from './styles';

const Carousel = () => {
  const [state, setState] = React.useState({
    slideIdx: 0,
  });

  const currentSlide = React.useMemo(
    () => slides[state.slideIdx],
    [state.slideIdx]
  );

  const onPressNext = () =>
    setState((_state) => {
      const ns = { ..._state };

      if (_state.slideIdx < slides.length - 1) {
        ns.slideIdx += 1;
      }

      return ns;
    });

  const onPressPrev = () =>
    setState((_state) => {
      const ns = { ..._state };

      if (_state.slideIdx > 0) {
        ns.slideIdx -= 1;
      }

      return ns;
    });

  return (
    <View style={styles.container}>
      <CarouselSlide
        image={currentSlide.image}
        title={currentSlide.title}
        description={currentSlide.description}
      />
      <View style={styles.ctaContainer}>
        <Button
          disabled={state.slideIdx <= 0}
          style={styles.controlButton}
          onPress={onPressPrev}
        >
          <Text>Prev.</Text>
        </Button>
        <Button
          disabled={state.slideIdx >= slides.length - 1}
          style={styles.controlButton}
          onPress={onPressNext}
        >
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
