import { geoCountryNameMap } from '@zerodep/geo-data';
import { stringDeburr } from '@zerodep/string-deburr';
import { CountryIso2 } from '@zerodep/types';

export const geoCountryIso = (country: string): CountryIso2 => {
  // convert params to expected uppercase values
  const ucCountry = stringDeburr(country)
    .toUpperCase()
    .replace(/[^A-Z ]/g, '') as CountryIso2;

  // check for an iso2 code  - O(1)
  if (geoCountryNameMap.has(ucCountry)) {
    return ucCountry as CountryIso2;
  }

  // country names exact match  - O(n)
  const lcCountry = ucCountry.toLowerCase() as string;
  for (const [countryIso2, names] of geoCountryNameMap.entries()) {
    if (names.includes(lcCountry)) {
      return countryIso2;
    }
  }

  // country names partial match  - O(n)
  for (const [countryIso2, names] of geoCountryNameMap.entries()) {
    for (const name of names) {
      if (name.startsWith(lcCountry)) {
        return countryIso2;
      }
    }
  }

  throw new Error(`Could not find a country for "${ucCountry}"`);
};
