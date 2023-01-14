import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

const searchResultsListItemStyles = StyleSheet.create({
  container: {
    height: scaleY(48),
    borderColor: 'grey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scaleX(12),
    justfiyContent: 'space-between',
  },
  leftMeta: { flex: 0.5 },
  rightCta: { flex: 0.5, alignItems: 'flex-end' },
  sendMessageButton: {},
  username: {},
  friendsSince: {},
});

export default searchResultsListItemStyles;
