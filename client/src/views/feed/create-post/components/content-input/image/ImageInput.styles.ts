import { StyleSheet } from 'react-native';
import {
  scaleX,
  scaleY,
} from '../../../../../../utils/methods/scaleable-units';

const imageInputStyles = StyleSheet.create({
  container: {},
  uploadImageButton: {
    alignItems: 'center',
    borderRadius: scaleX(4),
    paddingVertical: scaleY(24),
  },
  uploadImageButtonIcon: {},
  uploadImageButtonText: {},
  image: {
    height: scaleY(240),
    resizeMode: 'contain',
  },
  imageContainer: { borderColor: 'lightgrey', borderRadius: scaleX(4) },
});

export default imageInputStyles;
