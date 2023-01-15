import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

export const iconSize = 24;

const searchResultsListItemStyles = StyleSheet.create({
  container: {
    height: scaleY(48),
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgrey',
    paddingLeft: scaleX(16),
    paddingRight: scaleX(20),
    justfiyContent: 'space-between',
    backgroundColor: 'white',
  },

  leftMeta: { flex: 0.8 },
  rightCta: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
