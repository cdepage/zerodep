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
const toNumber: (value: number | bigint | string | boolean | Date) => number;
```

### Function Parameters

The `toNumber` function has the following parameters:

- **value** - the value to convert

## Examples

### Use Cases

```javascript
// numbers
toNumber(42); // 42
toNumber(3.14); // 3.14
toNumber(100e10); // 1000000000000

// strings
toNumber('-171.3'); // -171.3
toNumber('3e8'); // 300000000
toNumber('8,675,309'); // 8675309  <-- thousand separators are commas
toNumber('8.675.309,123'); // 8675309.123  <-- thousand separators are decimal points

// bigint
toNumber(8675309n); // 8675309

// booleans
toNumber(true); // 1
toNumber(false); // 0

// dates
toNumber(new Date('2022-04-22T10:30:00.000Z')); // 1650623400000

// invalid values
toNumber(null); // throws ZeroDepError: Cannot convert to number
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

then

```javascript
import { toNumber } from '@zerodep/app';
// or
import { toNumber } from '@zerodep/utilities';
// or
import { toNumber } from '@zerodep/to';
// or
import { toNumber } from '@zerodep/to-number';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/to.number` package to `@zerodep/to-number` for consistency across @zerodep ecosystem
