import { StyleSheet } from 'react-native';
import { scaleX } from '../../utils/methods/scaleable-units';

const friendsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scaleX(8),
  },
});

export default friendsStyles;
