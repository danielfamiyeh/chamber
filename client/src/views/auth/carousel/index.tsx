import React from 'react';
import { Text, View } from 'react-native';

import CarouselSlide from './components/slide/CarouselSlide';
import Button from '../../../components/input/button/Button';

import { slides } from './utils/constants';
import styles from './styles';

const Carousel = ({ navigation: { navigate } }) => {
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

  const isNotLastSlide = React.useMemo(
    () => state.slideIdx < slides.length - 1,
    [state.slideIdx]
  );
  return (
    <View style={styles.container}>
      <CarouselSlide
        image={currentSlide.image}
        title={currentSlide.title}
        description={currentSlide.description}
      >
        {!isNotLastSlide && (
          <View style={styles.ctaContainer}>
            <Button
              style={{ ...styles.ctaButton }}
              onPress={() => navigate('AuthMain', { method: 'signIn' })}
            >
              <Text>Sign In</Text>
            </Button>

            <Button
              style={{ ...styles.ctaButton }}
              onPress={() => navigate('AuthMain', { method: 'signUp' })}
            >
              <Text>Sign Up</Text>
            </Button>
          </View>
        )}
      </CarouselSlide>
      <View style={styles.controlContainer}>
        <Button style={styles.controlButton} onPress={onPressPrev}>
          {state.slideIdx > 0 && <Text>Prev.</Text>}
        </Button>

        <Button style={styles.controlButton} onPress={onPressNext}>
          {isNotLastSlide && <Text>Next.</Text>}
        </Button>
      </View>
    </View>
  );
};

export interface CarouselState {
  slideIdx: number;
}

export interface CarouselProps {
  navigate: Function;
}

export default Carousel;
