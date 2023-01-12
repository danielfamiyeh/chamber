import React from 'react';
import { View } from 'react-native';

import CarouselSlide from './components/slide/CarouselSlide';
import Button from '../../../components/input/button/Button';

import { slides } from './utils/constants';
import styles from './styles';

const Carousel = () => {
  const [slideIdx, setSlideIdx] = React.useState(0);
  const currentSlide = React.useMemo(() => slides[slideIdx], [slideIdx]);

  return (
    <View style={styles.container}>
      <CarouselSlide
        image={currentSlide.image}
        title={currentSlide.title}
        description={currentSlide.description}
      />
      <View style={styles.ctaContainer}>
        <Button></Button>
        <Button></Button>
      </View>
    </View>
  );
};

export default Carousel;
