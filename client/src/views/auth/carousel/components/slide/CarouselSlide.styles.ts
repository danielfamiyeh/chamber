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
    marginBottom: scaleY(12),
  },
  titleDivider: {
    height: 1,
    backgroundColor: 'lightgrey',
  },
  description: {
    textAlign: 'center',
  },
});

export default carouselSlideStyles;
