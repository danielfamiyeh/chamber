import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../utils/methods/scaleable-units';
import ThemeManager from '../../../utils/ui/ThemeManger';

const createUserStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ThemeManager.theme.background,
  },

  form: {
    borderWidth: 1,
    height: '75%',
    width: '100%',
  },

  textInput: {
    borderWidth: 1,
  },

  button: {
    alignSelf: 'flex-start',
    paddingHorizontal: scaleX(8),
    paddingVertical: scaleY(8),
    borderRadius: scaleX(4),
  },
});

export default createUserStyles;
