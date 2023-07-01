import { countryInfo, countyMap, stateInfo } from '@zerodep/address-data';
import { addressStateIso } from './addressStateIso';

export interface AddressCountyInfo {
  countyName: string;
  countyFips: string;
}

export interface AddressState {
  stateName: string;
  stateAbbr: string;
  stateFips: string;
  countryName: string;
  countryAbbr: string;
  counties: AddressCountyInfo[];
}

export const addressState = (
  state: string,
  country?: 'US' | 'CA'
): AddressState => {
  // find the state & country iso codes for the provided state (and optional country)
  const [stateAbbr, countryAbbr] = addressStateIso(state, country);

  // get additional information about the state & country
  const { stateName, stateFips } = stateInfo[stateAbbr];
  const { countryName } = countryInfo[countryAbbr];
  const counties = Object.keys(countyMap)
    .filter((key) => key.startsWith(stateFips))
    .map((key) => ({
      countyName: countyMap[key],
      countyFips: key,
    }));

  return {
    stateName,
    stateAbbr,
    countryName,
    countryAbbr,
    stateFips: stateFips,
    counties,
  };
};
