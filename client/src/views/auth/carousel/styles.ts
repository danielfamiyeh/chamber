import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../utils/methods/scaleable-units';

const carouselStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: scaleY(16),
    justifyContent: 'space-between',
  },
  ctaContainer: {
    height: 24,
    flexDirection: 'row',
    paddingHorizontal: scaleX(24),
    justifyContent: 'space-between',
  },
  controlButton: {
    borderWidth: 0,
  },
  ctaPrev: {},
  ctaNext: {},
});

export default carouselStyles;
