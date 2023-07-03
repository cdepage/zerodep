import { stringDeburr } from '@zerodep/string-deburr';
import { CountryIso2, StateCaAbbr, StateUsAbbr } from '@zerodep/types';
import { stateNamesCA } from '../data/stateNamesCA';
import { stateNamesUS } from '../data/stateNamesUS';

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
    if (stateNamesUS.has(ucState)) {
      return [ucState, 'US'];
    }
    const lcState = ucState.toLowerCase();
    for (const [stateIso, names] of stateNamesUS.entries()) {
      if (names.includes(lcState)) {
        return [stateIso, 'US'];
      }
    }
  }

  // Canadian provinces
  if (ucCountry === 'CA' || !ucCountry) {
    if (stateNamesCA.has(ucState)) {
      return [ucState, 'CA'];
    }
    const lcState = ucState.toLowerCase();
    for (const [stateIso, names] of stateNamesCA.entries()) {
      if (names.includes(lcState)) {
        return [stateIso, 'CA'];
      }
    }
  }

  throw new Error(`Could not find a state or province for "${ucState}"`);
};
