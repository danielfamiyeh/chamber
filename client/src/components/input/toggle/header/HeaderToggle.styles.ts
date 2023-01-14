import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../utils/methods/scaleable-units';

const headerToggleStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: 'lightgrey',
  },
  item: {
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,

    paddingVertical: scaleY(10),
    flex: 1,
  },
  itemText: {
    fontSize: scaleX(16),
    // fontWeight: '300',
  },
});

export default headerToggleStyles;
