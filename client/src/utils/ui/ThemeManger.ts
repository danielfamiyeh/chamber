import { Theme } from '../../../types';

export const lightTheme: Theme = {
  border: 'lightgrey',
  background: '#f2f6fc',
  info: '#2077fa',
  success: '#5cb85c',
  warning: '',
  error: '#df4759',
};

export default class ThemeManager {
  static theme = lightTheme;

  static setTheme(theme: Theme) {
    ThemeManager.theme = theme;
  }
}
