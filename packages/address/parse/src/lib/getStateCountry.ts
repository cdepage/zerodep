// state zip-code ranges
const countryStates: Record<string, string[]> = {
  US: [
    // States by Population
    'CA',
    'TX',
    'FL',
    'NY',
    'PA',
    'IL',
    'OH',
    'GA',
    'NC',
    'MI',
    'NJ',
    'VA',
    'WA',
    'AZ',
    'MA',
    'TN',
    'IN',
    'MD',
    'MO',
    'WI',
    'CO',
    'MN',
    'SC',
    'AL',
    'LA',
    'KY',
    'OR',
    'OK',
    'CT',
    'UT',
    'IA',
    'NV',
    'AR',
    'MS',
    'KS',
    'NM',
    'NE',
    'ID',
    'WV',
    'HI',
    'NH',
    'ME',
    'RI',
    'MT',
    'DE',
    'SD',
    'ND',
    'AK',
    'VT',
    'WY',
    'DC',

    // American Territories
    'AS',
    'FM',
    'GU',
    'MH',
    'MP',
    'PR',
    'PW',
    'UM',
    'VI',

    // American Armed Forces
    'AA',
    'AE',
    'AP',
  ],
  CA: [
    'ON',
    'QC',
    'BC',
    'AB',
    'MB',
    'SK',
    'NS',
    'NB',
    'NL',
    'PE',
    'NT',
    'YT',
    'NU',
  ],
};

export const getStateCountry = (state: string): string | undefined => {
  for (const country of Object.keys(countryStates)) {
    if (countryStates[country].includes(state)) {
      return country;
    }
  }

  return undefined;
};
