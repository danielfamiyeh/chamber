import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../utils/methods/scaleable-units';

const chatListStyles = StyleSheet.create({
  container: {
    paddingTop: scaleY(4),
    paddingHorizontal: scaleX(8),
  },
});

export default chatListStyles;
