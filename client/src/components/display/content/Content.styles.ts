import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../utils/methods/scaleable-units';

const contentStyles = StyleSheet.create({
  container: {},
  image: {
    width: scaleX(200),
    height: scaleY(200),
  },
});

export default contentStyles;
