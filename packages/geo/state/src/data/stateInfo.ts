import {
  RegionBea,
  RegionCensus,
  RegionDivision,
  StateCa,
  StateCaAbbr,
  StateUs,
  StateUsAbbr,
} from '@zerodep/types';

export interface StateInfo {
  stateName: StateCa | StateUs;
  stateFips: string;
  regionCensus?: RegionCensus;
  regionDivision?: RegionDivision;
  regionBea?: RegionBea;
}

type StateInfoMap = Map<StateUsAbbr | StateCaAbbr, StateInfo>;

export const stateInfoMap: StateInfoMap = new Map([
  // United States
  [
    'CA',
    {
      stateName: 'California',
      stateFips: '06',
      regionCensus: 'West',
      regionDivision: 'Pacific',
      regionBea: 'Far West',
    },
  ],
  [
    'TX',
    {
      stateName: 'Texas',
      stateFips: '48',
      regionCensus: 'South',
      regionDivision: 'West South Central',
      regionBea: 'Southwest',
    },
  ],
  [
    'FL',
    {
      stateName: 'Florida',
      stateFips: '12',
      regionCensus: 'South',
      regionDivision: 'South Atlantic',
      regionBea: 'Southeast',
    },
  ],
  [
    'NY',
    {
      stateName: 'New York',
      stateFips: '36',
      regionCensus: 'Northeast',
      regionDivision: 'Middle Atlantic',
      regionBea: 'Mideast',
    },
  ],
  [
    'PA',
    {
      stateName: 'Pennsylvania',
      stateFips: '42',
      regionCensus: 'Northeast',
      regionDivision: 'Middle Atlantic',
      regionBea: 'Mideast',
    },
  ],
  [
    'IL',
    {
      stateName: 'Illinois',
      stateFips: '17',
      regionCensus: 'Midwest',
      regionDivision: 'East North Central',
      regionBea: 'Great Lakes',
    },
  ],
  [
    'OH',
    {
      stateName: 'Ohio',
      stateFips: '39',
      regionCensus: 'Midwest',
      regionDivision: 'East North Central',
      regionBea: 'Great Lakes',
    },
  ],
  [
    'GA',
    {
      stateName: 'Georgia',
      stateFips: '13',
      regionCensus: 'South',
      regionDivision: 'South Atlantic',
      regionBea: 'Southeast',
    },
  ],
  [
    'NC',
    {
      stateName: 'North Carolina',
      stateFips: '37',
      regionCensus: 'South',
      regionDivision: 'South Atlantic',
      regionBea: 'Southeast',
    },
  ],
  [
    'MI',
    {
      stateName: 'Michigan',
      stateFips: '26',
      regionCensus: 'Midwest',
      regionDivision: 'East North Central',
      regionBea: 'Great Lakes',
    },
  ],
  [
    'NJ',
    {
      stateName: 'New Jersey',
      stateFips: '34',
      regionCensus: 'Northeast',
      regionDivision: 'Middle Atlantic',
      regionBea: 'Mideast',
    },
  ],
  [
    'VA',
    {
      stateName: 'Virginia',
      stateFips: '51',
      regionCensus: 'South',
      regionDivision: 'South Atlantic',
      regionBea: 'Southeast',
    },
  ],
  [
    'WA',
    {
      stateName: 'Washington',
      stateFips: '53',
      regionCensus: 'West',
      regionDivision: 'Pacific',
      regionBea: 'Far West',
    },
  ],
  [
    'AZ',
    {
      stateName: 'Arizona',
      stateFips: '04',
      regionCensus: 'West',
      regionDivision: 'Mountain',
      regionBea: 'Southwest',
    },
  ],
  [
    'MA',
    {
      stateName: 'Massachusetts',
      stateFips: '25',
      regionCensus: 'Northeast',
      regionDivision: 'New England',
      regionBea: 'New England',
    },
  ],
  [
    'TN',
    {
      stateName: 'Tennessee',
      stateFips: '47',
      regionCensus: 'South',
      regionDivision: 'East South Central',
      regionBea: 'Southeast',
    },
  ],
  [
    'IN',
    {
      stateName: 'Indiana',
      stateFips: '18',
      regionCensus: 'Midwest',
      regionDivision: 'East North Central',
      regionBea: 'Great Lakes',
    },
  ],
  [
    'MD',
    {
      stateName: 'Maryland',
      stateFips: '24',
      regionCensus: 'South',
      regionDivision: 'South Atlantic',
      regionBea: 'Mideast',
    },
  ],
  [
    'MO',
    {
      stateName: 'Missouri',
      stateFips: '29',
      regionCensus: 'Midwest',
      regionDivision: 'West North Central',
      regionBea: 'Great Lakes',
    },
  ],
  [
    'WI',
    {
      stateName: 'Wisconsin',
      stateFips: '55',
      regionCensus: 'Midwest',
      regionDivision: 'East North Central',
      regionBea: 'Great Lakes',
    },
  ],
  [
    'CO',
    {
      stateName: 'Colorado',
      stateFips: '08',
      regionCensus: 'West',
      regionDivision: 'Mountain',
      regionBea: 'Rocky Mountain',
    },
  ],
  [
    'MN',
    {
      stateName: 'Minnesota',
      stateFips: '27',
      regionCensus: 'Midwest',
      regionDivision: 'West North Central',
      regionBea: 'Great Lakes',
    },
  ],
  [
    'SC',
    {
      stateName: 'South Carolina',
      stateFips: '45',
      regionCensus: 'South',
      regionDivision: 'South Atlantic',
      regionBea: 'Southeast',
    },
  ],
  [
    'AL',
    {
      stateName: 'Alabama',
      stateFips: '01',
      regionCensus: 'South',
      regionDivision: 'East South Central',
      regionBea: 'Southeast',
    },
  ],
  [
    'LA',
    {
      stateName: 'Louisiana',
      stateFips: '22',
      regionCensus: 'South',
      regionDivision: 'West South Central',
      regionBea: 'Southeast',
    },
  ],
  [
    'KY',
    {
      stateName: 'Kentucky',
      stateFips: '21',
      regionCensus: 'South',
      regionDivision: 'East South Central',
      regionBea: 'Southeast',
    },
  ],
  [
    'OR',
    {
      stateName: 'Oregon',
      stateFips: '41',
      regionCensus: 'West',
      regionDivision: 'Pacific',
      regionBea: 'Far West',
    },
  ],
  [
    'OK',
    {
      stateName: 'Oklahoma',
      stateFips: '40',
      regionCensus: 'South',
      regionDivision: 'West South Central',
      regionBea: 'Southwest',
    },
  ],
  [
    'CT',
    {
      stateName: 'Connecticut',
      stateFips: '09',
      regionCensus: 'Northeast',
      regionDivision: 'New England',
      regionBea: 'New England',
    },
  ],
  [
    'UT',
    {
      stateName: 'Utah',
      stateFips: '49',
      regionCensus: 'West',
      regionDivision: 'Mountain',
      regionBea: 'Rocky Mountain',
    },
  ],
  [
    'IA',
    {
      stateName: 'Iowa',
      stateFips: '19',
      regionCensus: 'Midwest',
      regionDivision: 'West North Central',
      regionBea: 'Great Lakes',
    },
  ],
  [
    'NV',
    {
      stateName: 'Nevada',
      stateFips: '32',
      regionCensus: 'West',
      regionDivision: 'Mountain',
      regionBea: 'Far West',
    },
  ],
  [
    'AR',
    {
      stateName: 'Arkansas',
      stateFips: '04',
      regionCensus: 'South',
      regionDivision: 'West South Central',
      regionBea: 'Southeast',
    },
  ],
  [
    'MS',
    {
      stateName: 'Mississippi',
      stateFips: '28',
      regionCensus: 'South',
      regionDivision: 'East South Central',
      regionBea: 'Southeast',
    },
  ],
  [
    'KS',
    {
      stateName: 'Kansas',
      stateFips: '20',
      regionCensus: 'South',
      regionDivision: 'West North Central',
      regionBea: 'Great Lakes',
    },
  ],
  [
    'NM',
    {
      stateName: 'New Mexico',
      stateFips: '35',
      regionCensus: 'West',
      regionDivision: 'Mountain',
      regionBea: 'Southwest',
    },
  ],
  [
    'NE',
    {
      stateName: 'Nebraska',
      stateFips: '31',
      regionCensus: 'Midwest',
      regionDivision: 'West North Central',
      regionBea: 'Great Lakes',
    },
  ],
  [
    'ID',
    {
      stateName: 'Idaho',
      stateFips: '16',
      regionCensus: 'West',
      regionDivision: 'Mountain',
      regionBea: 'Rocky Mountain',
    },
  ],
  [
    'WV',
    {
      stateName: 'West Virginia',
      stateFips: '54',
      regionCensus: 'South',
      regionDivision: 'South Atlantic',
      regionBea: 'Southeast',
    },
  ],
  [
    'HI',
    {
      stateName: 'Hawaii',
      stateFips: '15',
      regionCensus: 'West',
      regionDivision: 'Pacific',
      regionBea: 'Far West',
    },
  ],
  [
    'NH',
    {
      stateName: 'New Hampshire',
      stateFips: '33',
      regionCensus: 'Northeast',
      regionDivision: 'New England',
      regionBea: 'New England',
    },
  ],
  [
    'ME',
    {
      stateName: 'Maine',
      stateFips: '23',
      regionCensus: 'Northeast',
      regionDivision: 'New England',
      regionBea: 'New England',
    },
  ],
  [
    'RI',
    {
      stateName: 'Rhode Island',
      stateFips: '44',
      regionCensus: 'Northeast',
      regionDivision: 'New England',
      regionBea: 'New England',
    },
  ],
  [
    'MT',
    {
      stateName: 'Montana',
      stateFips: '30',
      regionCensus: 'West',
      regionDivision: 'Mountain',
      regionBea: 'Rocky Mountain',
    },
  ],
  [
    'DE',
    {
      stateName: 'Delaware',
      stateFips: '10',
      regionCensus: 'South',
      regionDivision: 'South Atlantic',
      regionBea: 'Mideast',
    },
  ],
  [
    'SD',
    {
      stateName: 'South Dakota',
      stateFips: '46',
      regionCensus: 'Midwest',
      regionDivision: 'West North Central',
      regionBea: 'Great Lakes',
    },
  ],
  [
    'ND',
    {
      stateName: 'North Dakota',
      stateFips: '38',
      regionCensus: 'Midwest',
      regionDivision: 'West North Central',
      regionBea: 'Great Lakes',
    },
  ],
  [
    'AK',
    {
      stateName: 'Alaska',
      stateFips: '02',
      regionCensus: 'West',
      regionDivision: 'Pacific',
      regionBea: 'Far West',
    },
  ],
  [
    'VT',
    {
      stateName: 'Vermont',
      stateFips: '50',
      regionCensus: 'Northeast',
      regionDivision: 'New England',
      regionBea: 'New England',
    },
  ],
  [
    'WY',
    {
      stateName: 'Wyoming',
      stateFips: '56',
      regionCensus: 'West',
      regionDivision: 'Mountain',
      regionBea: 'Rocky Mountain',
    },
  ],
  [
    'DC',
    {
      stateName: 'District of Columbia',
      stateFips: '11',
      regionCensus: 'South',
      regionDivision: 'South Atlantic',
      regionBea: 'Mideast',
    },
  ],

  // Canada
  ['ON', { stateName: 'Ontario', stateFips: '00' }],
  ['QC', { stateName: 'Quebec', stateFips: '00' }],
  ['BC', { stateName: 'British Columbia', stateFips: '00' }],
  ['AB', { stateName: 'Alberta', stateFips: '00' }],
  ['MB', { stateName: 'Manitoba', stateFips: '00' }],
  ['SK', { stateName: 'Saskatchewan', stateFips: '00' }],
  ['NS', { stateName: 'Nova Scotia', stateFips: '00' }],
  ['NB', { stateName: 'New Brunswick', stateFips: '00' }],
  ['NL', { stateName: 'Newfoundland and Labrador', stateFips: '00' }],
  ['PE', { stateName: 'Prince Edward Island', stateFips: '00' }],
  ['NT', { stateName: 'Northwest Territories', stateFips: '00' }],
  ['YT', { stateName: 'Yukon', stateFips: '00' }],
  ['NU', { stateName: 'Nunavut', stateFips: '00' }],

  // American Territories
  ['AS', { stateName: 'American Samoa', stateFips: '00' }],
  ['FM', { stateName: 'Micronesia', stateFips: '00' }],
  ['GU', { stateName: 'Guam', stateFips: '00' }],
  ['MH', { stateName: 'Marshall Islands', stateFips: '00' }],
  ['MP', { stateName: 'Northern Mariana Islands', stateFips: '00' }],
  ['PR', { stateName: 'Puerto Rico', stateFips: '00' }],
  ['PW', { stateName: 'Palau', stateFips: '00' }],
  ['UM', { stateName: 'US Minor Outlying Islands', stateFips: '00' }],
  ['VI', { stateName: 'US Virgin Islands', stateFips: '00' }],

  // American Armed Forces
  ['AA', { stateName: 'Armed Forces Americas', stateFips: '00' }],
  ['AE', { stateName: 'Armed Forces Europe', stateFips: '00' }],
  ['AP', { stateName: 'Armed Forces Pacific', stateFips: '00' }],
]);
