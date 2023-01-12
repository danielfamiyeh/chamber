import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../utils/methods/scaleable-units';
import ThemeManager from '../../../utils/ui/ThemeManger';

const carouselStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: scaleY(16),
    justifyContent: 'space-between',
  },
  controlContainer: {
    height: 24,
    flexDirection: 'row',
    paddingHorizontal: scaleX(24),
    justifyContent: 'space-between',
  },
  controlButton: {
    borderWidth: 0,
  },
  controlButtonText: {
    color: 'grey',
  },
  ctaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: scaleY(128),
  },
  ctaButton: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: scaleX(4),
    paddingVertical: scaleY(8),
    paddingHorizontal: scaleX(16),
  },
  ctaButtonText: {
    fontWeight: '700',
    color: ThemeManager.theme.info,
  },
});

export default carouselStyles;
