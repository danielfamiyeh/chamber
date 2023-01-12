import { StyleSheet } from 'react-native';
import { scaleY } from '../../../utils/methods/scaleable-units';

const imageSize = 180;

const authMainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: imageSize,
    height: imageSize,
    alignSelf: 'center',
  },
  linkContainer: {
    borderWidth: 0,
    alignSelf: 'center',
    marginTop: scaleY(12),
  },
  linkText: {
    color: 'grey',
    textDecorationLine: 'underline',
  },
});

export default authMainStyles;
