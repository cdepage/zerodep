# addressState()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/address-state?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-state)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/address-state?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-state)
[![version](https://img.shields.io/npm/v/@zerodep/address-state?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-state)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A utility to get information about a state from a state name or abbreviation.

## Signature

```typescript
const addressState: (state: string, country?: 'US' | 'CA') => AddressState;

interface AddressState {
  stateName: string;
  stateAbbr: string;
  stateFips: string;
  countryName: string;
  countryAbbr: string;
  counties: {
    countyName: string;
    countyFips: string;
  }[];
}
```

### Function Parameters

The `addressState` function has the following parameters:

- **state** - any state or province name or common abbreviation, may be uppercase or lowercase
- **country** - optional 2-letter country abbreviation, may be uppercase or lowercase

### Successful Response

The `addressState` function will return the following:

- **stateName** - the full name of the state
- **stateAbbr** - the 2-letter abbreviation of the state
- **stateFips** - the 2-digit FIPS code for the state (only for US states)
- **countryName** - the full name of the country the state belongs to
- **countryAbbr** - the 2-letter ISO code of the country the state belongs to
- **counties** - an array of county names & 5-digit FIPS codes (only for US states)

### Unsuccessful Response

The `addressState` function will throw an `Error` if the state cannot be found.

## Examples

**Successful Case - US**

```javascript
addressState('vermont');
// or
addressState('VERMONT', 'US');
// or
addressState('vt');

// {
//   stateName: "Vermont",
//   stateAbbr: "VT"
//   stateFips: '50',
//   countryName: "United States of America",
//   countryAbbr: "US",
//   counties: [
//     { countyName: "Addison County", countyFips: "50001" },
//     { countyName: "Bennington County", countyFips: "50003" },
//     { countyName: "Caledonia County", countyFips: "50005" },
//     { countyName: "Chittenden County", countyFips: "50007" },
//     { countyName: "Essex County", countyFips: "50009" },
//     { countyName: "Franklin County", countyFips: "50011" },
//     { countyName: "Grand Isle County", countyFips: "50013" },
//     { countyName: "Lamoille County", countyFips: "50015" },
//     { countyName: "Orange County", countyFips: "50017" },
//     { countyName: "Orleans County", countyFips: "50019" },
//     { countyName: "Rutland County", countyFips: "50021" },
//     { countyName: "Washington County", countyFips: "50023" },
//     { countyName: "Windham County", countyFips: "50025" },
//     { countyName: "Windsor County", countyFips: "50027" },
//   ]
// }
```

**Successful Case - CA**

```javascript
addressState('alberta');
// or
addressState('ALTA', 'CA');
// or
addressState('ab');

// {
//   stateName: "Alberta",
//   stateAbbr: "AB"
//   stateFips: '00',
//   countryName: "Canada",
//   countryAbbr: "CA",
//   counties: []
// }
```

**Unsuccessful Cases**

```javascript
addressState('unknown');
// throws Error('Could not find a state or province for "UNKNOWN"')

addressState('AB', 'US');
// throws Error('Could not find a state or province for "AB"')  <-- The US parameter limits scope to only US states

addressState('NY', 'CA');
// throws Error('Could not find a state or province for "NY"')  <-- The CA parameter limits scope to only Canadian provinces
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking, all packages are available in ESM or CJS formats.

```bash
# all @zerodep packages
npm i @zerodep/app

# all @zerodep address functions
npm i @zerodep/address

# only this @zerodep package - smallest file size
npm i @zerodep/address-state
```

then

```javascript
import { addressState } from '@zerodep/app';
// or
import { addressState } from '@zerodep/utilities';
// or
import { addressState } from '@zerodep/address';
// or
import { addressState } from '@zerodep/address-state';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-06-29

**Added**

- added the `addressState()` function
