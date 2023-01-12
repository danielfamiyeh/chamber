import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';
import ThemeManager from '../../../../../utils/ui/ThemeManger';

const contentInputStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scaleX(16),
    justifyContent: 'center',
  },
  textInputContainer: {},
  textInputLabel: {
    fontWeight: '200',
    marginBottom: scaleY(6),
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    textAlignVertical: 'top',
    borderRadius: scaleX(4),
    paddingHorizontal: scaleX(12),
    paddingVertical: scaleY(8),
    fontSize: scaleX(16),
    height: scaleY(64),
  },
  image: { borderWidth: 1 },
  changeTypeButton: {
    borderWidth: 0,
    marginTop: scaleY(8),
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
  changeTypeButtonText: {
    color: ThemeManager.theme.info,
  },
});

export default contentInputStyles;
