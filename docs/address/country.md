# addressCountry()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/address-country?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-country)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/address-country?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-country)
[![version](https://img.shields.io/npm/v/@zerodep/address-country?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-country)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A parser to find where a country name or abbreviation is in a string.

This function will return an array of results, with the most likely result being first. If a country is not found an empty array will be returned.

## Signature

```typescript
const addressCountry: (address: string, findInMiddle: boolean = false) => AddressCountry[];

interface AddressCountry {
  countryIso2: CountryIso2[];
  source: string;
  ndx: number;
  length: number;
}
```

The `addressCountry` function has the following parameters:

- **address** - an address string
- **findInMiddle** - optional flag to trigger searching in the middle of the address for a country (default is `false`)

The `addressCountry` result has the following properties:

- **countryIso2** - the ISO2 code of the country
- **source** - the string that matched to identify the country
- **ndx** - the position in the string where the source match starts
- **length** - the length of the matched string

## Examples

### Well Formatted Case

```javascript
addressCountry('1234 Main Street, Los Angeles CA, America');
//  [
//    {
//      countryIso2: 'US',
//      source: 'America',
//      ndx: 34,
//      length: 7,
//    },
//  ]
```

### With Check-in-Middle Flag Enabled

```javascript
const CHECK_IN_MIDDLE = true;
addressCountry('1234 Main Street, Los Angeles CA, United States 90210', CHECK_IN_MIDDLE);
// [
//   {
//     countryIso2: 'US',
//     source: 'United States',
//     ndx: 34,
//     length: 13,
//   },
//   {
//     countryIso2: 'CA',
//     source: 'CA',
//     ndx: 30,
//     length: 2,
//   },
// ]
```

### Unsuccessful Case

```javascript
const CHECK_IN_MIDDLE = true;
addressCountry('unknown');
// []
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "parsers" packages
npm i @zerodep/parsers

# all @zerodep "address" packages
npm i @zerodep/address

# only this @zerodep package
npm i @zerodep/address-country
```

then

```javascript
import { addressCountry } from '@zerodep/add';
// or
import { addressCountry } from '@zerodep/parsers';
// or
import { addressCountry } from '@zerodep/address';
// or
import { addressCountry } from '@zerodep/address-country';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-07-03

**Added**

- added the `addressCountry()` function
