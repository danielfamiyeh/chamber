import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

const carouselSlideStyles = StyleSheet.create({
  container: {
    paddingHorizontal: scaleX(24),
  },
  logo: {
    fontWeight: '100',
    textAlign: 'center',
    fontSize: scaleX(64),
  },
  image: {
    width: scaleX(240),
    height: scaleY(240),
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: scaleX(24),
  },
  description: {
    textAlign: 'center',
  },
});

export default carouselSlideStyles;
