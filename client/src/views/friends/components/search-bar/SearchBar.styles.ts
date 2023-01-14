import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../utils/methods/scaleable-units';

const searchBarStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'lightgrey',
    borderRadius: scaleX(4),
    paddingLeft: scaleX(12),
    borderBottomWidth: 1,
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
