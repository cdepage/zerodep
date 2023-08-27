# addressZip()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/address-zip?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-zip)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/address-zip?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-zip)
[![version](https://img.shields.io/npm/v/@zerodep/address-zip?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-zip)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A parser to find where zip/postal codes (and US 5-digit extensions) are in a string.

This function will return an array of results, with the most likely result being first. If a zip/postal code is not found an empty array will be returned.

NOTE: currently supports US and CA zip/postal codes

## Signature

```typescript
const addressZip: (address: string) => AddressZip[];

interface AddressZip {
  zip: string;
  zipExt?: string;
  countryIso2s: CountryIso2[];
  source: string;
  ndx: number;
  length: number;
}
```

The `addressZip` function has the following parameters:

- **address** - an address string

The `addressZip` result has the following properties:

- **zip** - the zip/postal code
- **zipExt** - [optional] the 5-digit US zip code extension
- **countryIso2s** - an array of ISO2 codes of the country associated with the zip/postal code format
- **source** - the string that matched to identify the zip/postal code
- **ndx** - the position in the string where the source match starts
- **length** - the length of the matched string

## Examples

### Well Formatted

```javascript
addressZip('1234 Main St, Los Angeles CA, US 90210-1234');
//  [
//    {
//      zip: '90210',
//      zipExt: '1234',
//      countryIso2s: ['US'],
//      source: '90210-1234',
//      ndx: 34,
//      length: 10,
//    },
//  ]
```

### Canadian and American Codes

```javascript
addressZip('12345 Main Street, Toronto ON, Canada M4A 3B6');
// [
//   {
//     zip: 'M4A 3B6',
//     countryIso2s: ['CA'],
//     source: 'M4A 3B6',
//     ndx: 38,
//     length: 7,
//   },
//   {
//     zip: '12345',
//     countryIso2s: ['US'],
//     source: '12345',
//     ndx: 0,
//     length: 5,
//   },
// ]
```

### Unsuccessful Case

```javascript
addressZip('unknown');
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
npm i @zerodep/address-zip
```

then

```javascript
import { addressZip } from '@zerodep/add';
// or
import { addressZip } from '@zerodep/parsers';
// or
import { addressZip } from '@zerodep/address';
// or
import { addressZip } from '@zerodep/address-zip';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.3.0] - 2023-07-05

**Added**

- added the `addressZip()` function
