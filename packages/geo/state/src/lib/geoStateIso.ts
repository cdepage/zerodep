import { geoStateNameMapCA, geoStateNameMapUS } from '@zerodep/geo-data';
import { stringDeburr } from '@zerodep/string-deburr';
import { CountryIso2, StateCaAbbr, StateUsAbbr } from '@zerodep/types';

const findInMap = (map: Map<string, string[]>, state: string): string => {
  const lcState = state.toLowerCase();
  for (const [stateIso, names] of map.entries()) {
    if (names.includes(lcState)) {
      return stateIso;
    }
  }
  return '';
};

export const geoStateIso = (
  state: string,
  country?: 'US' | 'CA' | 'us' | 'ca'
): [StateUsAbbr | StateCaAbbr, CountryIso2] => {
  // convert params to expected uppercase values
  const ucCountry = country?.toUpperCase() as CountryIso2;
  const ucState = stringDeburr(state)
    .toUpperCase()
    .replace(/[^A-Z]/g, '') as StateUsAbbr | StateCaAbbr;

  // US states
  if (ucCountry === 'US' || !ucCountry) {
    if (geoStateNameMapUS.has(ucState)) {
      return [ucState, 'US'];
    }
    const stateIsoUs = findInMap(geoStateNameMapUS, ucState);
    if (stateIsoUs) {
      return [stateIsoUs as StateUsAbbr, 'US'];
    }
  }

  // Canadian provinces
  if (ucCountry === 'CA' || !ucCountry) {
    if (geoStateNameMapCA.has(ucState)) {
      return [ucState, 'CA'];
    }
    const stateIsoCa = findInMap(geoStateNameMapCA, ucState);
    if (stateIsoCa) {
      return [stateIsoCa as StateCaAbbr, 'CA'];
    }
  }

  throw new Error(`Could not find a state or province for "${ucState}"`);
};
