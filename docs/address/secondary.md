# addressSecondary()

[![version](https://img.shields.io/npm/v/@zerodep/address-secondary?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-secondary)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A parser to find where a secondary name or abbreviation is in a string.

This function will return an array of results, with the most likely result being first. If a secondary is not found an empty array will be returned.

## Signature

```typescript
declare const addressSecondary: (address: string) => Addresssecondary[];

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

// unsuccessful case
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

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.3.0] - 2023-07-03

**Added**

- added the `addressSecondary()` function
