import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../utils/methods/scaleable-units';

const accountStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: scaleY(8),
    paddingHorizontal: scaleX(8),
  },
  text: {
    color: 'grey',
    marginTop: scaleY(8),
    marginBottom: scaleY(4),
  },
});

export default accountStyles;
