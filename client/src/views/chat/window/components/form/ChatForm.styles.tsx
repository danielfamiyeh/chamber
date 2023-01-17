import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

const chatFormStyles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    height: scaleY(48),
    borderColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: scaleX(8),
  },
  messageContainer: {
    flex: 0.9,
    flexDirection: 'row',
    borderColor: 'lightgrey',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: scaleX(8),
  },
  imageButtonContainer: {
    flex: 0.1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  imageButton: {
    borderWidth: 0,
    alignSelf: 'center',
  },
  imageButtonIcon: {
    color: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2294fb',
    borderRadius: scaleX(14),
    padding: scaleX(1),
    height: scaleY(23),
  },
  sendButtonIcon: {
    color: 'white',
  },
});

export default chatFormStyles;
