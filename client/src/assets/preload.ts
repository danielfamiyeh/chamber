import { preloadAuthImages } from './auth/preload';

const preloaders = [preloadAuthImages];

export const preloadImages = () =>
  Promise.all(preloaders.map(async (loader) => await loader()));
