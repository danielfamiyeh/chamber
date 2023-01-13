import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../utils/methods/scaleable-units';

const searchBarStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: scaleX(4),
    paddingLeft: scaleX(12),
    borderColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    height: scaleY(36),
  },
  iconContainer: {
    flex: 0.15,
    borderWidth: 0,
    borderLeftWidth: 1,
    borderLeftColor: 'lightgrey',
    alignItems: 'center',
  },
  icon: {
    borderLeftWidth: 1,
    borderLeftColor: 'lightgrey',
  },
});

export default searchBarStyles;
