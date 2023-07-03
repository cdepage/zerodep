import { CountryInfoMap } from './types';

export const countryInfo: Pick<CountryInfoMap, 'CA' | 'US'> = {
  CA: { countryName: 'Canada' },
  US: { countryName: 'United States' },
};
