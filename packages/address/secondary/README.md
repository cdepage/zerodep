# @zerodep/address-secondary

[![version](https://img.shields.io/npm/v/@zerodep/address-secondary?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-secondary)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A parser to find where a secondary name or abbreviation is in a string.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/address/secondary) page.

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

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { addressSecondary } from '@zerodep/address-secondary';

// CJS
const { addressSecondary } = require('@zerodep/address-secondary');
```

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

// no results found
addressSecondary('unknown');
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
