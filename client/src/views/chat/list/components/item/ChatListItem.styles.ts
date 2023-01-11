import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

const avatarSize = scaleX(52);

const chatListItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: scaleX(16),
    paddingVertical: scaleY(12),
    maxHeight: scaleY(80),
    borderRadius: 8,
  },
  left: {},
  right: {
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatar: {
    borderWidth: 1,
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    borderColor: 'lightgrey',
    marginRight: scaleX(16),
  },
  recipients: {
    fontWeight: 'bold',
  },
  lastMessage: {},
  timeAgo: {
    color: 'grey',
    marginTop: scaleY(4),
  },
  indicator: {},
});

export default chatListItemStyles;
