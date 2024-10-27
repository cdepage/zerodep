# @zerodep/address-country

[![version](https://img.shields.io/npm/v/@zerodep/address-state?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-state)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A parser to find where a state name or abbreviation is in a string.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/address/state) page.

## Signature

```typescript
declare const addressState: (address: string, countryIso2?: CountryIso2) => AddressState[];

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

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { addressState } from '@zerodep/address-state';

// CJS
const { addressState } = require('@zerodep/address-state');
```

```javascript
// American address
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

// Canadian Address
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

// Unspecified country
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

// no results found
addressState('unknown');
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
