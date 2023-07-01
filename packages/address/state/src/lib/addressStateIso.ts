import {
  CountryIso,
  StateIso,
  stateNamesCA,
  stateNamesUS,
} from '@zerodep/address-data';
import { stringDeburr } from '@zerodep/string-deburr';

export const addressStateIso = (
  state: string,
  country?: CountryIso
): [StateIso, CountryIso] => {
  // convert params to expected uppercase values
  const ucCountry = country?.toUpperCase() as CountryIso;
  const ucState = stringDeburr(state)
    .toUpperCase()
    .replace(/[^A-Z]/g, '') as StateIso;

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
