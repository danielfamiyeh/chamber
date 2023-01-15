import { StyleSheet } from 'react-native';
import { scaleY } from '../../utils/methods/scaleable-units';

const friendsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerToggle: {
    marginBottom: scaleY(4),
    backgroundColor: 'white',
  },
});

export default friendsStyles;
