# @zerodep/to-integer

[![version](https://img.shields.io/npm/v/@zerodep/to-integer?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-integer)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to convert values to an integer. Invalid values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/to/integer) page.

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { toNumber } from '@zerodep/to-integer';

// CJS
const { toNumber } = require('@zerodep/to-integer');
```

```javascript
// BigInts
toInteger(8675309n); // 8675309
toInteger(42n); // 42
toInteger(0n); // 0
toInteger(-0n); // 0
toInteger(-42n); // -42
toInteger(-8675309n); // -8675309

// Booleans
toInteger(true); // 1
toInteger(false); // 0

// Dates
toInteger(new Date('2022-04-22T10:30:00.000Z')); // 1650623400000
toInteger(new Date('2099-12-31')); // 4102358400000

// Floats
toInteger(3.14); // 3
toInteger(0.0); // 0
toInteger(-0.0); // -0
toInteger(-171.3); // -171
toInteger(Math.E); // 2
toInteger(Math.PI); // 3
toInteger(Number.MIN_VALUE); // 0

// Numbers
toInteger(Number.POSITIVE_INFINITY); // throws ZeroDepError: Cannot convert to integer
toInteger(Number.MAX_SAFE_INTEGER); // 9007199254740991
toInteger(Number.MAX_VALUE); // 1.7976931348623157e+308
toInteger(3e8); // 300000000
toInteger(42); // 42
toInteger(1); // 1
toInteger(0); // 0
toInteger(-0); // -0
toInteger(-1); // -1
toInteger(-42); // -42
toInteger(-3e8); // -300000000
toInteger(Number.MIN_SAFE_INTEGER); // -9007199254740991
toInteger(Number.NEGATIVE_INFINITY); // throws ZeroDepError: Cannot convert to integer
toInteger(Number.NaN); // throws ZeroDepError: Cannot convert to integer

// Strings
toInteger('42'); // 24
toInteger('3e8'); // 300000000
toInteger('8,675,309'); // 8675309  <-- thousand separators are commas
toInteger('8.675.309,123'); // 8675309  <-- thousand separators are decimal points
toInteger(''); // 0
toInteger('a longer string'); // false
toInteger('1000n'); // 1000
toInteger('3e8'); // 300000000
toInteger('42'); // 42
toInteger('3.14'); // 3
toInteger('0'); // 0
toInteger('-0'); // -0
toInteger('-3.14'); // -3
toInteger('-42'); // -42
toInteger('-3e8'); // -300000000
toInteger('-1000n'); // -1000

// Other - anything that is not a number, bigint,  string,  boolean or Date
toInteger(null); // throws ZeroDepError: Cannot convert to integer <-- CAUTION
toInteger(undefined); // throws ZeroDepError: Cannot convert to integer <-- CAUTION
toInteger('asdf'); // throws ZeroDepError: Cannot convert to integer
toInteger({ not: 'a number' }); // throws ZeroDepError: Cannot convert to integer
```

---

## ZeroDep Advantages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases node_modules folder size
- **ESM & CJS** - has both ecmascript modules and common javascript exports
- **Tree Shakable** - built to be fully tree shakable ensuring your packages are the smallest possible size
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples at [zerodep.app](https://zerodep.app)
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, this includes changelogs
- **MIT Licensed** - permissively licensed for maximum usability
