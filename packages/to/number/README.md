# @zerodep/to-number

[![version](https://img.shields.io/npm/v/@zerodep/to-number?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-number)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to convert values to a number. Invalid values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/to/number) page.

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { toNumber } from '@zerodep/to-number';

// CJS
const { toNumber } = require('@zerodep/to-number');
```

```javascript
// BigInts
toNumber(8675309n); // 8675309
toNumber(42n); // 42
toNumber(0n); // 0
toNumber(-0n); // 0
toNumber(-42n); // -42
toNumber(-8675309n); // -8675309

// Booleans
toNumber(true); // 1
toNumber(false); // 0

// Dates
toNumber(new Date('2022-04-22T10:30:00.000Z')); // 1650623400000
toNumber(new Date('2099-12-31')); // 4102358400000

// Floats
toNumber(3.14); // 3.14
toNumber(0.0); // 0
toNumber(-0.0); // -0
toNumber(-171.3); // -171.3
toNumber(Math.E); // 2.718281828459045
toNumber(Math.PI); // 3.141592653589793
toNumber(Number.MIN_VALUE); // 5e-324

// Numbers
toNumber(Number.POSITIVE_INFINITY); // throws ZeroDepError: Cannot convert to number
toNumber(Number.MAX_SAFE_INTEGER); // 9007199254740991
toNumber(Number.MAX_VALUE); // 1.7976931348623157e+308
toNumber(3e8); // 300000000
toNumber(42); // 42
toNumber(1); // 1
toNumber(0); // 0
toNumber(-0); // -0
toNumber(-1); // -1
toNumber(-42); // -42
toNumber(-3e8); // -300000000
toNumber(Number.MIN_SAFE_INTEGER); // -9007199254740991
toNumber(Number.NEGATIVE_INFINITY); // throws ZeroDepError: Cannot convert to number
toNumber(Number.NaN); // throws ZeroDepError: Cannot convert to number

// Strings
toNumber('42'); // 24
toNumber('3e8'); // 300000000
toNumber('8,675,309'); // 8675309  <-- thousand separators are commas
toNumber('8.675.309,123'); // 8675309  <-- thousand separators are decimal points
toNumber(''); // 0
toNumber('a longer string'); // false
toNumber('1000n'); // 1000
toNumber('3e8'); // 300000000
toNumber('42'); // 42
toNumber('3.14'); // 3.14
toNumber('0'); // 0
toNumber('-0'); // -0
toNumber('-3.14'); // -3.14
toNumber('-42'); // -42
toNumber('-3e8'); // -300000000
toNumber('-1000n'); // -1000

// Other - anything that is not a number, bigint,  string,  boolean or Date
toNumber(null); // throws ZeroDepError: Cannot convert to number <-- CAUTION
toNumber(undefined); // throws ZeroDepError: Cannot convert to number <-- CAUTION
toNumber('asdf'); // throws ZeroDepError: Cannot convert to number
toNumber({ not: 'a number' }); // throws ZeroDepError: Cannot convert to number
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
