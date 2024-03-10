import { ZeroDepError } from '@zerodep/errors';

export const colorHex2Hsl = (hex: string): string => {
  // Remove the '#' character if it exists
  hex = hex.replace(/^#/, '');

  let r = 0;
  let g = 0;
  let b = 0;
  let a: number | undefined = undefined;

  switch (hex.length) {
    case 3:
    case 4:
      r = parseInt(hex.substring(0, 1), 16) / 255;
      g = parseInt(hex.substring(1, 2), 16) / 255;
      b = parseInt(hex.substring(2, 3), 16) / 255;
      a = hex.length > 3 ? parseInt(hex.substring(4, 4), 16) / 255 : a;
      break;

    case 6:
    case 8:
      r = parseInt(hex.substring(0, 2), 16) / 255;
      g = parseInt(hex.substring(2, 4), 16) / 255;
      b = parseInt(hex.substring(4, 6), 16) / 255;
      a = hex.length > 6 ? parseInt(hex.substring(6, 8), 16) / 255 : a;
      break;

    default:
      throw new ZeroDepError(`Invalid hex color: ${hex}`);
  }

  // find the minimum and maximum values among the RGB components to determine the lightness
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  let l = (min + max) / 2;
  let h = 0;
  let s = 0;

  // grayscale images have identical min & max values
  if (min !== max) {
    // calculate the saturation
    s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);

    // calculate the hue
    if (max === r) {
      h = (60 * ((g - b) / (max - min)) + 360) % 360;
    } else if (max === g) {
      h = (60 * ((b - r) / (max - min)) + 120) % 360;
    } else {
      h = (60 * ((r - g) / (max - min)) + 240) % 360;
    }
  }

  // round the values to reasonable precision
  h = Math.round(h);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `${h} ${s}% ${l}%`;
};
