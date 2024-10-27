# @zerodep/address-country

[![version](https://img.shields.io/npm/v/@zerodep/address-country?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-country)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A parser to find where a country name or abbreviation is in a string.

This function will return an array of results, with the most likely result being first. If a country is not found an empty array will be returned.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/address/country) page.

## Signature

```typescript
declare const addressCountry: (address: string, findInMiddle: boolean = false) => AddressCountry[];

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

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { addressCountry } from '@zerodep/address-country';

// CJS
const { addressCountry } = require('@zerodep/address-country');
```

```javascript
// well formatted address
addressCountry('1234 Main Street, Los Angeles CA, America');
//  [
//    {
//      countryIso2: 'US',
//      source: 'America',
//      ndx: 34,
//      length: 7,
//    },
//  ]

// with Check-in-Middle Flag Enabled
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

// no results found
addressCountry('unknown');
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
