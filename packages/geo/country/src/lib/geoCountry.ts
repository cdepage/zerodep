import { CountryIso2 } from '@zerodep/types';
import { countryInfo, CountryInfo } from '../data/countryInfo';
import { geoCountryIso } from './geoCountryIso';

export interface GeoCountry extends CountryInfo {
  countryIso2: CountryIso2;
}

export const geoCountry = (country: string): GeoCountry => {
  // find the country & country iso codes for the provided country (and optional country)
  const countryIso2 = geoCountryIso(country);

  if (countryInfo.has(countryIso2)) {
    const { countryName, countryIso3, countryCode } =
      countryInfo.get(countryIso2)!;

    return {
      countryIso2,
      countryIso3,
      countryName,
      countryCode,
    };
  }

  throw new Error(`Could not find a country for "${countryIso2}"`);
};
