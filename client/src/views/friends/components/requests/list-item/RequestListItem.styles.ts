import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

const requestListItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justiftyContent: 'space-between',
    paddingVertical: scaleY(8),
    paddingLeft: scaleX(12),
  },
  metaContainer: {
    flex: 0.8,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: scaleY(4),
  },
  date: {
    color: 'grey',
  },
});

export default requestListItemStyles;
