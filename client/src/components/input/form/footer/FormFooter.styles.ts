import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../utils/methods/scaleable-units';

const formFooterStyles = StyleSheet.create({
  container: {
    marginTop: scaleY(64),
    // borderWidth: 1,
    bottom: 0,
  },
  submitButton: {
    alignSelf: 'center',
    borderRadius: scaleX(4),
    paddingVertical: scaleY(8),
    paddingHorizontal: scaleX(32),
  },
});

export default formFooterStyles;
