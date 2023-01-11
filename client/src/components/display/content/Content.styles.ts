import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../utils/methods/scaleable-units';

const contentStyles = StyleSheet.create({
  container: {},
  image: {
    borderWidth: 1,
    width: scaleX(200),
    height: scaleY(200),
    borderRadius: scaleX(4),
    borderColor: 'rgba(128, 128, 128, 0.2)',
    alignSelf: 'center',
  },
});

export default contentStyles;
