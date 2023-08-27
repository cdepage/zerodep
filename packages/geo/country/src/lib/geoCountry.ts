import { CountryInfo, geoCountryInfoMap } from '@zerodep/geo-data';
import { CountryIso2 } from '@zerodep/types';
import { geoCountryIso } from './geoCountryIso';

export interface GeoCountry extends CountryInfo {
  countryIso2: CountryIso2;
}

export const geoCountry = (country: string): GeoCountry => {
  // find the country & country iso codes for the provided country (and optional country)
  const countryIso2 = geoCountryIso(country);

  if (geoCountryInfoMap.has(countryIso2)) {
    const { countryName, countryIso3, countryCode } =
      geoCountryInfoMap.get(countryIso2)!;

    return {
      countryIso2,
      countryIso3,
      countryName,
      countryCode,
    };
  }

  throw new Error(`Could not find a country for "${countryIso2}"`);
};
