# addressState()

[![version](https://img.shields.io/npm/v/@zerodep/address-state?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-state)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A utility to get information about a state from a state name or abbreviation.

This function will return an array of results, with the most likely result being first. If a state is not found an empty array will be returned.

## Signature

```typescript
const addressState: (address: string, countryIso2?: CountryIso2) => AddressState[];

interface AddressState {
  stateAbbr: StateUsAbbr | StateCaAbbr;
  source: string;
  ndx: number;
  length: number;
}
```

### Function Parameters

The `addressState` function has the following parameters:

- **address** - an address string
- **countryIso2** - optional 2-letter country code

### Successful Response

The `addressState` function will return the following:

- **stateAbbr** - the 2-letter abbreviation of the state
- **source** - the string that matched to identify the state
- **ndx** - the position in the string where the source match starts
- **length** - the length of the matched string

### Unsuccessful Response

The `addressState` function will throw an `Error` if the state cannot be found.

## Examples

**Successful Case - US**

```javascript
addressState('1234 Main Street, Los Angeles California, 90210');
// or
addressState('1234 Main Street, Los Angeles California, 90210', 'US');

//  [
//    {
//      stateAbbr: 'CA',
//      source: 'California',
//      ndx: 30,
//      length: 10,
//    },
//  ]
```

**Successful Case - CA**

```javascript
addressState('13375 rue rita pierrefonds quebec h8z1j3');
// or
addressState('13375 rue rita pierrefonds quebec h8z1j3', 'CA');
// [
//   {
//     "stateAbbr": "QC",
//     "source": "qc",
//     "ndx": 27,
//     "length": 6,
//   }
// ]
```

**Successful Case - Mixed Countries**

```javascript
addressState('1234 oregon street, toronto on');
// [
//   {
//     "stateAbbr": "ON",
//     "source": "on",
//     "ndx": 28,
//     "length": 2
//   },
//   {
//     "stateAbbr": "OR",
//     "source": "oregon",
//     "ndx": 5,
//     "length": 6
//   }
// ]
```

**Unsuccessful Cases**

```javascript
addressState('unknown');
// []
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking, all packages are available in ESM or CJS formats.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "parsers" packages
npm i @zerodep/parsers

# all @zerodep "address" packages
npm i @zerodep/address

# only this @zerodep package
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

#### [2.3.0] - 2023-06-29

**Added**

- added the `addressState()` function
