import { StyleSheet } from 'react-native';

import ThemeManager from '../../../../../utils/ui/ThemeManger';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

const contentInputStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scaleX(16),
    justifyContent: 'center',
  },
  changeTypeButton: {
    borderWidth: 0,
    marginTop: scaleY(8),
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
  changeTypeButtonText: {
    color: ThemeManager.theme.info,
  },
  submitButton: {
    alignSelf: 'center',
    marginTop: scaleY(32),
    borderRadius: scaleX(4),
    paddingVertical: scaleY(4),
    paddingHorizontal: scaleX(24),
    backgroundColor: ThemeManager.theme.info,
  },
  submitButtonText: {
    color: 'white',
  },
});

export default contentInputStyles;
