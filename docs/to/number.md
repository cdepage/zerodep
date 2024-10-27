# toNumber()

[![version](https://img.shields.io/npm/v/@zerodep/to-number?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-number)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to convert values to a number. Invalid values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
declare const toNumber: (value: number | bigint | string | boolean | Date) => number;
```

### Function Parameters

The `toNumber` function has the following parameters:

- **value** - the value to convert

## Examples

```javascript
// ESM
import { toNumber } from '@zerodep/app';

// CJS
const { toNumber } = require('@zerodep/app');
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

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "to" functions
npm i @zerodep/to

# only this @zerodep package
npm i @zerodep/to-number
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/to.number` package to `@zerodep/to-number` for consistency across @zerodep ecosystem
