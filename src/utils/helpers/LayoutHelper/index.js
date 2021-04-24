import { Dimensions, PixelRatio } from 'react-native';

const MOCKUP_WIDTH = 375;
const MOCKUP_HEIGHT = 812;

export const {height, width} = Dimensions.get('window');

/**
 * Get size with scale factor
 * TODO: will use this for scale sizes for different phones and screen resolutions
 *
 * @param {number} size - original size
 * @var MOCKUP_WIDTH = 375
 * @var MOCKUP_HEIGHT = 812
 */
export function getWidthWithScaleFactor(size) {
  return PixelRatio.roundToNearestPixel(size * (width / MOCKUP_WIDTH));
}

export function getHeightWithScaleFactor(size) {
  return PixelRatio.roundToNearestPixel(size * (height / MOCKUP_HEIGHT));
}

export function getFontWithScaleFactor(size) {
  return PixelRatio.roundToNearestPixel(size * (width / MOCKUP_WIDTH));
}
