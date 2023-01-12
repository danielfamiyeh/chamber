import { Image } from 'react-native';

const images = [
  require('./chamber_slide_chat.png'),
  require('./chamber_slide_like.png'),
  require('./chamber_slide_friends.png'),
];

export const preloadAuthImages = () =>
  Promise.all(images.map((image) => Image.resolveAssetSource(image)));
