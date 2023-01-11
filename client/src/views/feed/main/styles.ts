import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../utils/methods/scaleable-units';

const feedStyles = StyleSheet.create({
  container: {
    paddingVertical: scaleY(4),
    paddingHorizontal: scaleX(8),
  },
});

export default feedStyles;
