import { StyleSheet } from 'react-native';
import { scaleY } from '../../../utils/methods/scaleable-units';

const carouselStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: scaleY(16),
    justifyContent: 'space-between',
  },
  ctaContainer: {
    height: 24,
    backgroundColor: 'black',
  },
  ctaPrev: {},
  ctaNext: {},
});

export default carouselStyles;
