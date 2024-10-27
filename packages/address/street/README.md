# @zerodep/address-street

[![version](https://img.shields.io/npm/v/@zerodep/address-street?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-street)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A parser to find where a street name or abbreviation is in a string.

This function will return an array of results in the order of the provided address. If a street is not found an empty array will be returned.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/address/street) page.

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

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { addressStreet } from '@zerodep/address-street';

// CJS
const { addressStreet } = require('@zerodep/address-street');
```

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
