import { StyleSheet } from 'react-native';
import { ChatBubbleProps } from './ChatBubble';

import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

const chatBubbleStyles = StyleSheet.create({
  container: {
    width: '50%',
    paddingHorizontal: scaleX(8),
    marginVertical: scaleX(8),
  },
  content: {
    borderRadius: scaleX(4),
    padding: scaleX(8),
  },
  contentText: {},
  contentImage: {},
  meta: {},
  metaCreatedAt: {
    color: 'grey',
    marginTop: scaleY(2),
    fontSize: scaleX(9),
  },
});

export const getComputedStyles = (props: ChatBubbleProps) => {
  const computedStyles = {
    contentText: { color: 'black' },
    container: { alignSelf: 'flex-start' },
    content: { backgroundColor: 'lightgrey', alignSelf: 'flex-start' },
    metaCreatedAt: {
      alignSelf: 'flex-start',
    },
  };

  if (props.isOwn) {
    computedStyles.contentText.color = 'white';
    computedStyles.container.alignSelf = 'flex-end';
    computedStyles.content = {
      alignSelf: 'flex-end',
      backgroundColor: '#2294fb',
    };
    computedStyles.metaCreatedAt = {
      alignSelf: 'flex-end',
    };
  }

  return computedStyles;
};

export default chatBubbleStyles;
