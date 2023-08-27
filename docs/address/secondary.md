# addressSecondary()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/address-secondary?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-secondary)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/address-secondary?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/address-secondary)
[![version](https://img.shields.io/npm/v/@zerodep/address-secondary?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-secondary)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A parser to find where a secondary name or abbreviation is in a string.

This function will return an array of results, with the most likely result being first. If a secondary is not found an empty array will be returned.

## Signature

```typescript
const addressSecondary: (address: string) => Addresssecondary[];

interface AddressSecondary {
  secondary: string;
  source: string;
  ndx: number;
  length: number;
  hasUnit: boolean;
}
```

The `addressSecondary` function has the following parameters:

- **address** - an address string

The `addressSecondary` result has the following properties:

- **secondary** - the standardized secondary value
- **source** - the string that matched to identify the secondary
- **ndx** - the position in the string where the source match starts
- **length** - the length of the matched string
- **hasUnit** - flag indicating if the secondary typically has a number associated with it

## Examples

### Use Case

```javascript
addressSecondary('basement 1234 Main Street East Los Angeles CA, US');
//  [
//    {
//      secondary: 'BSMT',
//      source: 'basement',
//      ndx: 0,
//      length: 8,
//      hasUnit: false,
//    },
//  ]

addressSecondary('office 1234 Main Street East ph 4 Los Angeles CA, US');
// [
//   {
//     secondary: 'OFC',
//     source: 'office',
//     ndx: 0,
//     length: 6,
//     hasUnit: true,
//   },
//   {
//     secondary: 'PH',
//     source: 'ph',
//     ndx: 29,
//     length: 2,
//     hasUnit: true,
//   },
// ]
```

### Unsuccessful Case

```javascript
addressSecondary('unknown');
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
npm i @zerodep/address-secondary
```

then

```javascript
import { addressSecondary } from '@zerodep/add';
// or
import { addressSecondary } from '@zerodep/parsers';
// or
import { addressSecondary } from '@zerodep/address';
// or
import { addressSecondary } from '@zerodep/address-secondary';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-07-03

**Added**

- added the `addresssecondary()` function
