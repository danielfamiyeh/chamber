import { Theme } from '../../../types';

export const lightTheme: Theme = {
  border: 'lightgrey',
  background: '#f2f6fc',
  info: '#2077fa',
  success: '',
  warning: '',
  error: '',
};

export default class ThemeManager {
  static theme = lightTheme;

  static setTheme(theme: Theme) {
    ThemeManager.theme = theme;
  }
}
