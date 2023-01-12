import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../utils/methods/scaleable-units';

const formFieldStyles = StyleSheet.create({
  container: {},
  label: {
    color: 'grey',
    fontWeight: '500',
    marginBottom: scaleY(4),
  },
  textInput: {
    borderWidth: 1,
    height: scaleY(38),
    borderRadius: scaleX(4),
    paddingHorizontal: scaleX(16),
    borderColor: 'lightgrey',
  },
});

export default formFieldStyles;
