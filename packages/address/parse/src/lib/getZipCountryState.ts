import { ZeroDepError } from '@zerodep/errors';
import { guardString } from '@zerodep/guard-string';

// state zip-code ranges
const stateZips = [
  { min: 35000, max: 36999, iso2: 'AL' },
  { min: 99500, max: 99999, iso2: 'AK' },
  { min: 85000, max: 86999, iso2: 'AZ' },
  { min: 71600, max: 72999, iso2: 'AR' },
  { min: 90000, max: 96699, iso2: 'CA' },
  { min: 80000, max: 81999, iso2: 'CO' },
  { min: 6000, max: 6999, iso2: 'CT' },
  { min: 19700, max: 19999, iso2: 'DE' },
  { min: 32000, max: 34999, iso2: 'FL' },
  { min: 30000, max: 31999, iso2: 'GA' },
  { min: 96700, max: 96999, iso2: 'HI' },
  { min: 83200, max: 83999, iso2: 'ID' },
  { min: 60000, max: 62999, iso2: 'IL' },
  { min: 46000, max: 47999, iso2: 'IN' },
  { min: 50000, max: 52999, iso2: 'IA' },
  { min: 66000, max: 67999, iso2: 'KS' },
  { min: 40000, max: 42999, iso2: 'KY' },
  { min: 70000, max: 71599, iso2: 'LA' },
  { min: 3900, max: 4999, iso2: 'ME' },
  { min: 20600, max: 21999, iso2: 'MD' },
  { min: 1000, max: 2799, iso2: 'MA' },
  { min: 48000, max: 49999, iso2: 'MI' },
  { min: 55000, max: 56999, iso2: 'MN' },
  { min: 38600, max: 39999, iso2: 'MS' },
  { min: 63000, max: 65999, iso2: 'MO' },
  { min: 59000, max: 59999, iso2: 'MT' },
  { min: 27000, max: 28999, iso2: 'NC' },
  { min: 58000, max: 58999, iso2: 'ND' },
  { min: 68000, max: 69999, iso2: 'NE' },
  { min: 88900, max: 89999, iso2: 'NV' },
  { min: 3000, max: 3899, iso2: 'NH' },
  { min: 7000, max: 8999, iso2: 'NJ' },
  { min: 87000, max: 88499, iso2: 'NM' },
  { min: 10000, max: 14999, iso2: 'NY' },
  { min: 43000, max: 45999, iso2: 'OH' },
  { min: 73000, max: 74999, iso2: 'OK' },
  { min: 97000, max: 97999, iso2: 'OR' },
  { min: 15000, max: 19699, iso2: 'PA' },
  { min: 300, max: 999, iso2: 'PR' },
  { min: 2800, max: 2999, iso2: 'RI' },
  { min: 29000, max: 29999, iso2: 'SC' },
  { min: 57000, max: 57999, iso2: 'SD' },
  { min: 37000, max: 38599, iso2: 'TN' },
  { min: 75000, max: 79999, iso2: 'TX' },
  { min: 88500, max: 88599, iso2: 'TX' },
  { min: 84000, max: 84999, iso2: 'UT' },
  { min: 5000, max: 5999, iso2: 'VT' },
  { min: 22000, max: 24699, iso2: 'VA' },
  { min: 20000, max: 20599, iso2: 'DC' },
  { min: 98000, max: 99499, iso2: 'WA' },
  { min: 24700, max: 26999, iso2: 'WV' },
  { min: 53000, max: 54999, iso2: 'WI' },
  { min: 82000, max: 83199, iso2: 'WY' },
];

// TODO: Canadian Postal Codes

interface IResult {
  state: string;
  country: string;
}

export const getZipCountryState = (zip: string): IResult | undefined => {
  guardString(zip);

  // some zip codes start with "0" which would be interpreted as octal values
  const zc = parseInt(zip, 10);

  const state = stateZips.filter((meta) => {
    return meta.min <= zc && meta.max >= zc;
  });

  if (state.length === 1) {
    return {
      state: state[0].iso2,
      country: 'US',
    };
  }

  if (!state.length) {
    throw new ZeroDepError(`No state found for "${zip}"`);
  } else if (state.length > 1) {
    throw new ZeroDepError(`Multiple states found for "${zip}"`);
  }

  return undefined;
};
