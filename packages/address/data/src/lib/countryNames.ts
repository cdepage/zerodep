import { CountryNameMap } from './types';

/**
 * DEVELOPER NOTE:
 * - ISO2 code is always uppercase
 * - all other values are always lowercase without diacritics
 */
export const countryNames: CountryNameMap = new Map([
  ['US', ['united states', 'united states of america', 'america', 'usa']],
  ['CA', ['canada', 'can']],
]);
