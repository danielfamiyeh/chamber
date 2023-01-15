import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

const requestListStyles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginTop: scaleY(4),
    paddingHorizontal: scaleX(8),
  },
  title: {
    color: 'grey',
    marginBottom: scaleY(4),
  },
});

export default requestListStyles;
