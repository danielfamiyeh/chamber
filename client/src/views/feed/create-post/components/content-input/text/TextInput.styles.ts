import { StyleSheet } from 'react-native';
import {
  scaleY,
  scaleX,
} from '../../../../../../utils/methods/scaleable-units';

const textInputStyles = StyleSheet.create({
  container: {},
  label: {
    fontWeight: '200',
    marginBottom: scaleY(6),
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    textAlignVertical: 'top',
    borderRadius: scaleX(4),
    paddingHorizontal: scaleX(12),
    paddingVertical: scaleY(8),
    fontSize: scaleX(16),
    height: scaleY(64),
  },
});

export default textInputStyles;
