import { geoCountryNameMap } from '@zerodep/geo-data';
import { CountryIso2 } from '@zerodep/types';

interface AddressCountry {
  countryIso2: CountryIso2;
  source: string;
  ndx: number;
  length: number;
}

export const addressCountry = (
  address: string,
  findInMiddle = false
): AddressCountry[] => {
  const countries: AddressCountry[] = [];

  // check for country abbreviations at the end of the address
  for (const iso2 of geoCountryNameMap.keys()) {
    // check for iso2 matches
    const endsWithRegex1 = new RegExp(`\\b${iso2}$`, 'gi');
    const endsWithMatches1 = address.match(endsWithRegex1);
    if (endsWithMatches1) {
      countries.push({
        countryIso2: iso2,
        source: endsWithMatches1[0],
        ndx: address.lastIndexOf(endsWithMatches1[0]),
        length: endsWithMatches1[0].length,
      });
      return countries;
    }

    // check for other spellings & abbreviations
    for (const val of geoCountryNameMap.get(iso2) || []) {
      const endsWithRegex2 = new RegExp(`\\b${val}$`, 'gi');
      const endsWithMatches2 = address.match(endsWithRegex2);
      if (endsWithMatches2) {
        countries.push({
          countryIso2: iso2,
          source: endsWithMatches2[0],
          ndx: address.lastIndexOf(endsWithMatches2[0]),
          length: endsWithMatches2[0].length,
        });
        return countries;
      }
    }
  }

  // countries are supposed to be at the end of an address (per USPS and Canada Post) or not present at all
  // - default behaviour is to follow USPS guidelines
  if (!findInMiddle) {
    return countries;
  }

  // check for countries in the address
  for (const iso2 of geoCountryNameMap.keys()) {
    // check for iso2 matches
    const endsWithRegex1 = new RegExp(`\\b${iso2}\\b`, 'gi');
    const endsWithMatches1 = address.match(endsWithRegex1);
    if (endsWithMatches1) {
      for (const val of endsWithMatches1) {
        countries.push({
          countryIso2: iso2,
          source: val,
          ndx: address.lastIndexOf(val),
          length: val.length,
        });
      }
    }

    // check for other spellings & abbreviations
    for (const val of geoCountryNameMap.get(iso2) || []) {
      const endsWithRegex2 = new RegExp(`\\b${val}\\b`, 'gi');
      const endsWithMatches2 = address.match(endsWithRegex2);
      if (endsWithMatches2) {
        for (const val of endsWithMatches2) {
          countries.push({
            countryIso2: iso2,
            source: val,
            ndx: address.lastIndexOf(val),
            length: val.length,
          });
        }
      }
    }
  }

  return countries;
};
