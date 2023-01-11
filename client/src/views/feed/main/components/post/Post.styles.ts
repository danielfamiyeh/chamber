import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

const postStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: scaleY(4),
    borderRadius: scaleX(2),
    paddingHorizontal: scaleX(8),
    paddingVertical: scaleY(8),
  },
  contentContainer: {},
});

export default postStyles;
