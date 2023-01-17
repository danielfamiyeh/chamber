import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

import ThemeManager from '../../../../../utils/ui/ThemeManger';

const chatListZeroStateStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: scaleY(64),
  },
  text: {
    fontSize: scaleX(16),
    fontWeight: '500',
    color: 'grey',
  },
  ctaButton: {
    marginTop: scaleY(8),
    borderRadius: scaleX(4),
    paddingVertical: scaleY(6),
    paddingHorizontal: scaleX(16),
    backgroundColor: ThemeManager.theme.info,
  },
  ctaButtonText: {
    color: 'white',
  },
});

export const iconProps = {
  size: 96,
  color: 'grey',
  style: {
    marginBottom: scaleY(8),
  },
};

export default chatListZeroStateStyles;
