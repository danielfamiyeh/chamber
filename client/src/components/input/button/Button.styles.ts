import { StyleSheet } from 'react-native';
import ThemeManager from '../../../utils/ui/ThemeManger';

const buttonStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: ThemeManager.theme.border,
  },
  text: {},
});

export default buttonStyles;
