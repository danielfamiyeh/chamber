import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

const searchResultsListItemStyles = StyleSheet.create({
  container: {
    height: scaleY(48),
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgrey',
    paddingHorizontal: scaleX(12),
    justfiyContent: 'space-between',
  },

  leftMeta: { flex: 0.8 },
  rightCta: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sendMessageButton: {
    borderWidth: 0,
  },
  addFriendButton: {
    borderWidth: 0,
  },
  username: {},
  dateText: {
    color: 'grey',
    fontSize: scaleX(10),
    marginTop: scaleY(1),
  },
  friendsSince: {},
});

export default searchResultsListItemStyles;
