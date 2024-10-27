# @zerodep/address-directional

[![version](https://img.shields.io/npm/v/@zerodep/address-directional?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/address-directional)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A parser to find where a directional name or abbreviation is in a string.

This function will return an array of results, with the most likely result being first. If a directional is not found an empty array will be returned.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/address/directional) page.

## Signature

```typescript
declare const addressDirectional: (address: string) => Addressdirectional[];

interface Addressdirectional {
  directional: string;
  source: string;
  ndx: number;
  length: number;
}
```

The `addressDirectional` function has the following parameters:

- **address** - an address string

The `addressDirectional` result has the following properties:

- **directional** - the standardized directional value
- **source** - the string that matched to identify the directional
- **ndx** - the position in the string where the source match starts
- **length** - the length of the matched string

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { addressDirectional } from '@zerodep/address-directional';

// CJS
const { addressDirectional } = require('@zerodep/address-directional');
```

```javascript
// well formatted address
addressDirectional('1234 Main Street East, Los Angeles CA, US');
//  [
//    {
//      directional: 'E',
//      source: 'East',
//      ndx: 17,
//      length: 4,
//    },
//  ]

// no results found
addressDirectional('unknown');
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
