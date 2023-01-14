import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../utils/methods/scaleable-units';

const friendsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scaleX(8),
    paddingVertical: scaleY(8),
  },
});

export default friendsStyles;
