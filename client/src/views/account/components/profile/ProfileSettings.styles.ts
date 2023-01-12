import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../utils/methods/scaleable-units';

const borderStyles = {
  borderWidth: 1,
  borderColor: 'lightgrey',
};

const avatarSize = scaleY(108);

const profileStyles = StyleSheet.create({
  container: {
    ...borderStyles,
    backgroundColor: 'white',
    paddingVertical: scaleY(24),
    borderRadius: scaleX(8),
    height: scaleY(240),
  },
  avatar: {
    ...borderStyles,
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    alignSelf: 'center',
    fontSize: scaleX(24),
    marginTop: scaleY(8),
  },
  createdAt: {
    color: 'grey',
  },
  updatedAt: { color: 'grey' },

  meta: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: scaleY(16),
  },
});

export default profileStyles;
