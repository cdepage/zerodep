# @zerodep/address-zip

[![version](https://img.shields.io/npm/v/@zerodep/address-zip?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-zip)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A parser to find where zip/postal codes (and US 5-digit extensions) are in a string.

This function will return an array of results, with the most likely result being first. If a zip/postal code is not found an empty array will be returned.

NOTE: currently supports US and CA zip/postal codes

Full documentation is available at the [zerodep.app](http://zerodep.app/#/address/zip) page.

## Signature

```typescript
declare const addressZip: (address: string) => AddressZip[];

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

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { addressZip } from '@zerodep/address-zip';

// CJS
const { addressZip } = require('@zerodep/address-zip');
```

```javascript
// well-formed address
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

//  Canadian and American Codes
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

// no results found
addressZip('unknown');
// []
```

---

## ZeroDep Advantages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases node_modules folder size
- **ESM & CJS** - supports both ECMAScript modules and common JavaScript exports
- **Tree Shakable** - built to be fully tree shakable ensuring your packages are the smallest possible size
- **Fully Typed** - typescript definitions are provided/built-in to every package for a superior developer experience
- **Semantically Named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples at [zerodep.app](https://zerodep.app)
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, valuable changelogs for understand changes
- **MIT Licensed** - permissively licensed for maximum usability
