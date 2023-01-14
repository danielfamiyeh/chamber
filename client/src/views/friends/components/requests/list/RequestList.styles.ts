import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

const requestListStyles = StyleSheet.create({
  container: {
    paddingHorizontal: scaleX(8),
  },
  title: {
    color: 'grey',
    marginBottom: scaleY(4),
  },
});

export default requestListStyles;
