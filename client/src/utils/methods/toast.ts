import Toast from 'react-native-toast-message';
import { ToastType } from '../../../types';

export const displayToast = (type: ToastType, text1 = '', text2 = '') =>
  Toast.show({
    type,
    text1,
    text2,
  });

export const toast = {
  success: (text1: string, text2: string) =>
    displayToast('success', text1, text2),

  warning: (text1: string, text2: string) =>
    displayToast('warning', text1, text2),

  error: (text1: string, text2: string) =>
    displayToast('error', text1 || 'An error occurred', text2),

  info: (text1: string, text2: string) => displayToast('info', text1, text2),
};
