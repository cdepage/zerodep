import {
  Country,
  CountryIso2,
  RegionBea,
  RegionCensus,
  RegionDivision,
  StateCa,
  StateCaAbbr,
  StateUs,
  StateUsAbbr,
} from '@zerodep/types';

export type CountryIso = 'US' | 'CA';

export interface CountryInfo {
  countryName: Country;
}

export interface StateInfo {
  stateName: StateCa | StateUs;
  stateFips: string;
  regionCensus?: RegionCensus;
  regionDivision?: RegionDivision;
  regionBea?: RegionBea;
}

export type CountryNameMap = Map<CountryIso, string[]>;
export type StateNameMap = Map<StateCaAbbr | StateUsAbbr, string[]>;

export type CountryInfoMap = Record<CountryIso2, CountryInfo>;
export type StateInfoMap = Record<StateCaAbbr | StateUsAbbr, StateInfo>;
