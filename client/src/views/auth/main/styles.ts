import { StyleSheet } from 'react-native';

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
});

export default authMainStyles;
