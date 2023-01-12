import { StyleSheet } from 'react-native';
import ThemeManager from '../../../utils/ui/ThemeManger';

const carouselStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeManager.theme.background,
  },
});

export default carouselStyles;
