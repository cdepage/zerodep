# addressStreet()

[![version](https://img.shields.io/npm/v/@zerodep/address-street?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-street)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A parser to find where a street name or abbreviation is in a string.

This function will return an array of results in the order of the provided address. If a street is not found an empty array will be returned.

## Signature

```typescript
declare const addressstreet: (address: string) => Addressstreet[];

interface Addressstreet {
  streetType: string;
  source: string;
  ndx: number;
  length: number;
  sourceIsAbbr: boolean;
}
```

The `addressstreet` function has the following parameters:

- **address** - an address string

The `addressstreet` result has the following properties:

- **streetType** - the abbreviation for the street
- **source** - the string that matched to identify the street
- **ndx** - the position in the string where the source match starts
- **length** - the length of the matched string
- **sourceIsAbbr** - flag indicating if the street type was abbreviated

## Examples

```javascript
// well-formed address
addressStreet('1234 Main Street, Los Angeles CA, United States 90210');
//  [
//    {
//      streetType: 'ST',
//      source: 'Street',
//      ndx: 10,
//      length: 6,
//      sourceIsAbbr: false,
//    }
//  ]

// well-formed address with multiple streets
addressStreet('36 trail street, edmonton ab');
// [
//   {
//     streetType: 'TR',
//     source: 'trail',
//     ndx: 3,
//     length: 5,
//     sourceIsAbbr: false,
//   },
//   {
//     streetType: 'ST',
//     source: 'street',
//     ndx: 9,
//     length: 6,
//     sourceIsAbbr: false,
//   },
// ]

// no results found
addressstreet('unknown');
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
npm i @zerodep/address-street
```

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.3.0] - 2023-07-03

**Added**

- added the `addressstreet()` function
