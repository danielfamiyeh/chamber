import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

const postStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: scaleY(4),
    borderRadius: scaleX(2),
    paddingHorizontal: scaleX(16),
    paddingVertical: scaleY(16),
  },
  metaContainer: {
    flexDirection: 'row',
  },
  divider: {
    height: 1,
    marginVertical: scaleY(6),
    backgroundColor: 'lightgrey',
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
    borderColor: 'lightgrey',
    flexDirection: 'row',
    marginTop: scaleY(12),
    paddingTop: scaleY(8),
    borderTopWidth: 1,
  },
  ctaLeft: { flex: 0.5, borderRightWidth: 1, borderColor: 'lightgrey' },
  ctaRight: { flex: 0.5 },
  ctaButton: { alignSelf: 'center', borderWidth: 0 },
});

export const iconSize = 18;

export default postStyles;
