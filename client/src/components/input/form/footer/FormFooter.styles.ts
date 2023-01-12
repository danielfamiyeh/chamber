import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../utils/methods/scaleable-units';
import ThemeManager from '../../../../utils/ui/ThemeManger';

const formFooterStyles = StyleSheet.create({
  container: {
    marginTop: scaleY(36),
    // borderWidth: 1,
    bottom: 0,
  },
  submitButton: {
    alignSelf: 'center',
    borderRadius: scaleX(4),
    paddingVertical: scaleY(8),
    paddingHorizontal: scaleX(32),
    backgroundColor: ThemeManager.theme.info,
  },

  submitButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default formFooterStyles;
