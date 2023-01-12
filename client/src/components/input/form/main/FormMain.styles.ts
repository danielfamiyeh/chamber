import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../utils/methods/scaleable-units';

const formMainStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scaleY(16),
    paddingHorizontal: scaleX(12),
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: scaleX(4),
  },
  title: {
    fontWeight: '300',
    fontSize: scaleX(32),
    marginBottom: scaleY(8),
  },
  formFieldSeparator: {
    height: scaleY(12),
  },
  titleDivider: {
    height: 1,
    backgroundColor: 'grey',
    marginBottom: scaleY(12),
  },
});

export default formMainStyles;
