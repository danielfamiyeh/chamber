import React from 'react';
import { View } from 'react-native';

import { slides } from './utils/constants';
import styles from './styles';
import CarouselSlide from './components/slide/CarouselSlide';

const Carousel = () => {
  const [slideIdx, setSlideIdx] = React.useState(0);
  const currentSlide = React.useMemo(() => slides[slideIdx], [slideIdx]);
  return (
    <View style={styles.container}>
      <CarouselSlide
        title={currentSlide.title}
        description={currentSlide.description}
      />
    </View>
  );
};

export default Carousel;
