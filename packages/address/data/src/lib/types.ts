export type CountryIso = 'US' | 'CA';

export type StateIso =
  | 'CA'
  | 'TX'
  | 'FL'
  | 'NY'
  | 'PA'
  | 'IL'
  | 'OH'
  | 'GA'
  | 'NC'
  | 'MI'
  | 'NJ'
  | 'VA'
  | 'WA'
  | 'AZ'
  | 'MA'
  | 'TN'
  | 'IN'
  | 'MD'
  | 'MO'
  | 'WI'
  | 'CO'
  | 'MN'
  | 'SC'
  | 'AL'
  | 'LA'
  | 'KY'
  | 'OR'
  | 'OK'
  | 'CT'
  | 'UT'
  | 'IA'
  | 'NV'
  | 'AR'
  | 'MS'
  | 'KS'
  | 'NM'
  | 'NE'
  | 'ID'
  | 'WV'
  | 'HI'
  | 'NH'
  | 'ME'
  | 'RI'
  | 'MT'
  | 'DE'
  | 'SD'
  | 'ND'
  | 'AK'
  | 'VT'
  | 'WY'
  | 'DC'
  | 'ON'
  | 'QC'
  | 'BC'
  | 'AB'
  | 'MB'
  | 'SK'
  | 'NS'
  | 'NB'
  | 'NL'
  | 'PE'
  | 'NT'
  | 'YT'
  | 'NU'
  | 'AS'
  | 'FM'
  | 'GU'
  | 'MH'
  | 'MP'
  | 'PR'
  | 'PW'
  | 'UM'
  | 'VI'
  | 'AA'
  | 'AE'
  | 'AP';

type RegionCensus = 'Northeast' | 'Midwest' | 'South' | 'West';

type RegionDivision =
  | 'New England'
  | 'Middle Atlantic'
  | 'East North Central'
  | 'West North Central'
  | 'South Atlantic'
  | 'East South Central'
  | 'West South Central'
  | 'Mountain'
  | 'Pacific';

type RegionBea =
  | 'New England'
  | 'Mideast'
  | 'Great Lakes'
  | 'Plains'
  | 'Southeast'
  | 'Southwest'
  | 'Rocky Mountain'
  | 'Far West';

export interface CountryInfo {
  countryName: string;
}

export interface StateInfo {
  stateName: string;
  stateFips: string;
  regionCensus?: RegionCensus;
  regionDivision?: RegionDivision;
  regionBea?: RegionBea;
}

export type CountryNameMap = Map<CountryIso, string[]>;
export type StateNameMap = Map<StateIso, string[]>;

export type CountryInfoMap = Record<CountryIso, CountryInfo>;
export type StateInfoMap = Record<StateIso, StateInfo>;
