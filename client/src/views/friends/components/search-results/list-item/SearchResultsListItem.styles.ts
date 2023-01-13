import { StyleSheet } from 'react-native';
import { scaleY } from '../../../../../utils/methods/scaleable-units';

const searchResultsListItemStyles = StyleSheet.create({
  container: {
    height: scaleY(72),
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
  leftMeta: {},
  rightCta: {},
  sendMessageButton: {},
  username: {},
  friendsSince: {},
});

export default searchResultsListItemStyles;
