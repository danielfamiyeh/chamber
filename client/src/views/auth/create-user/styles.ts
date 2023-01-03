import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../utils/methods/scaleable-units';
import ThemeManager from '../../../utils/ui/ThemeManger';

const createUserStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ThemeManager.theme.background,
  },

  form: {
    height: '75%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scaleX(32),
  },

  textInput: {
    width: '100%',
    borderWidth: 1,
    marginBottom: scaleY(12),
    borderRadius: scaleX(16),
    paddingVertical: scaleY(10),
    paddingHorizontal: scaleX(16),
    borderColor: ThemeManager.theme.border,
  },

  button: {
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: scaleX(8),
    paddingVertical: scaleY(8),
    borderRadius: scaleX(16),
    backgroundColor: ThemeManager.theme.info,
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default createUserStyles;
