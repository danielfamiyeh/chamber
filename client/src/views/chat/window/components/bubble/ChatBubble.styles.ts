import { StyleSheet } from 'react-native';
import { ChatBubbleProps } from './ChatBubble';

const chatBubbleStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {},
  contentText: {},
  contentImage: {},
  meta: {},
  metaSender: {},
  metaCreatedAt: {},
});

export const getComputedStyles = (props: ChatBubbleProps) => {
  const computedStyles = {
    content: { backgroundColor: '#b4b4bc' },
  };

  if (props.isOwn) {
    computedStyles.content.backgroundColor = '#2294fb';
  }

  return computedStyles;
};

export default chatBubbleStyles;
