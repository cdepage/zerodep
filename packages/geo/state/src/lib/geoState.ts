import { geoCountry } from '@zerodep/geo-country';
import { Country, CountryIso2, StateCaAbbr, StateUsAbbr } from '@zerodep/types';
import { StateInfo, stateInfoMap } from '../data/stateInfo';
import { geoStateIso } from './geoStateIso';

export interface GeoState extends StateInfo {
  stateAbbr: StateCaAbbr | StateUsAbbr;
  countryName: Country;
  countryIso2: CountryIso2;
}

export const geoState = (state: string, country?: 'US' | 'CA'): GeoState => {
  // find the state & country iso codes for the provided state (and optional country)
  const [stateAbbr, countryIso2] = geoStateIso(state, country);

  if (stateInfoMap.has(stateAbbr)) {
    const state = stateInfoMap.get(stateAbbr);
    if (!state) {
      throw new Error(`Could not find a state for "${state}"`);
    }

    const { countryName } = geoCountry(countryIso2);

    return {
      stateName: state.stateName,
      stateAbbr,
      stateFips: state.stateFips,
      regionCensus: state.regionCensus,
      regionDivision: state.regionDivision,
      regionBea: state.regionBea,
      countryName,
      countryIso2,
    };
  }

  throw new Error(`Could not find a state for "${state}"`);
};
