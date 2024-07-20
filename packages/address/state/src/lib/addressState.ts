/* eslint-disable sonarjs/cognitive-complexity */
import {
  geoStateNameMapCA,
  geoStateNameMapUS,
  StateNameMap,
} from '@zerodep/geo-data';
import { CountryIso2, StateCaAbbr, StateUsAbbr } from '@zerodep/types';

interface AddressState {
  stateAbbr: StateUsAbbr | StateCaAbbr;
  source: string;
  ndx: number;
  length: number;
}

export const addressState = (
  address: string,
  countryIso2?: CountryIso2
): AddressState[] => {
  // the iso2 codes of the states found
  const states: AddressState[] = [];

  // limit scope of searching, if possible
  let stateMap: StateNameMap = new Map();
  if (!countryIso2) {
    stateMap = new Map([...geoStateNameMapUS, ...geoStateNameMapCA]);
  } else if (countryIso2.toUpperCase() === 'US') {
    stateMap = geoStateNameMapUS;
  } else if (countryIso2.toUpperCase() === 'CA') {
    stateMap = geoStateNameMapCA;
  }

  for (const stateAbbr of stateMap.keys()) {
    // check for iso2 matches
    const regex3 = new RegExp(`\\b${stateAbbr}\\b`, 'gi');
    const matches3 = address.match(regex3);
    if (matches3) {
      for (const source of matches3) {
        states.push({
          stateAbbr,
          source,
          ndx: address.lastIndexOf(source),
          length: source.length,
        });
      }
    }

    // check for other spellings & abbreviations
    for (const val of stateMap.get(stateAbbr) || []) {
      const regex4 = new RegExp(`\\b${val}\\b`, 'gi');
      const matches4 = address.match(regex4);
      if (matches4) {
        for (const source of matches4) {
          states.push({
            stateAbbr,
            source,
            ndx: address.lastIndexOf(source),
            length: source.length,
          });
        }
      }
    }
  }

  // edge case: if there are multiple results ensure the one with the last occurrence is returned first
  if (states.length > 1) {
    states.sort((a, b) => (a.ndx < b.ndx ? 1 : -1));
  }

  return states;
};
