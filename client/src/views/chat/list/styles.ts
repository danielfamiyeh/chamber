import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../utils/methods/scaleable-units';

const chatListStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scaleY(4),
    paddingHorizontal: scaleX(8),
  },
});

export default chatListStyles;
