import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

const avatarSize = scaleX(52);

const chatListItemStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: scaleX(16),
    paddingVertical: scaleY(12),
    maxHeight: scaleY(80),
    borderRadius: 8,
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
  lastMessage: {
    marginVertical: scaleY(2),
  },
  lastMessageTimeAgo: {
    color: 'grey',
    marginTop: scaleY(4),
  },
  createdAt: {
    color: 'grey',
  },
  createdAtDate: {
    fontWeight: 'bold',
  },
  indicator: {},
});

export default chatListItemStyles;
