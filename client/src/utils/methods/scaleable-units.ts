import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scaleX = (size: number) => (width / guidelineBaseWidth) * size;
const scaleY = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scaleX(size) - size) * factor;

export { scaleX, scaleY, moderateScale };
