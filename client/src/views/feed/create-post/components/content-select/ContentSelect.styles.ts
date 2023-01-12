import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

const contentSelectStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  promptText: {
    fontWeight: '300',
    textAlign: 'center',
    fontSize: scaleX(14),
    marginBottom: scaleY(16),
  },
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  contentTypeContainer: {
    borderColor: 'grey',
    borderRadius: scaleX(8),
    paddingVertical: scaleY(8),
    paddingHorizontal: scaleY(16),
  },
  contentTypeIcon: {},
  contentTypeText: {
    fontSize: scaleX(16),
    textAlign: 'center',
    fontWeight: '300',
  },
});

export default contentSelectStyles;
