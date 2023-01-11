import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';
import { PostProps, PostState } from './Post';

const postStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: scaleY(4),
    borderRadius: scaleX(2),
    paddingHorizontal: scaleX(8),
    paddingVertical: scaleY(8),
  },
  metaContainer: {
    flexDirection: 'row',
    marginBottom: scaleY(2),
  },
  username: {
    fontWeight: 'bold',
  },
  createdAt: {
    color: 'grey',
  },
  contentContainer: {},
  contentSeparator: {
    height: scaleY(8),
  },
  ctaContainer: {
    flexDirection: 'row',
    marginTop: scaleY(12),
  },
  ctaButton: {
    flex: 0.5,
    height: scaleY(24),
    alignItems: 'center',
    borderColor: 'lightgrey',
    justifyContent: 'center',
  },
});

export const getComputedStyles = (props: PostProps, state: PostState) => {
  const computedStyles = {
    likeButton: {
      opacity: state.isLikeButtonPressed ? 0.5 : 1,
    },
    commentButton: {
      opacity: state.isCommentButtonPressed ? 0.5 : 1,
    },
  };

  return computedStyles;
};

export default postStyles;
