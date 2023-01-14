import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

const searchResultsListFooterStyles = StyleSheet.create({
  container: {
    height: scaleY(32),
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'lightgrey',
    justifyContent: 'space-between',
    paddingHorizontal: scaleX(8),
  },
  text: {
    color: 'grey',
    textAlign: 'center',
  },
  number: {
    fontWeight: 'bold',
  },
  button: {
    borderWidth: 0,
  },
});

export default searchResultsListFooterStyles;
