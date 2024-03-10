# toInteger()

[![version](https://img.shields.io/npm/v/@zerodep/to-integer?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-integer)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A utility to convert values to an integer. Invalid values will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
const toInteger: (value: number | bigint | string | boolean | Date) => number;
```

### Function Parameters

The `toNumber` function has the following parameters:

- **value** - the value to convert

## Examples

### Use Cases

```javascript
// numbers
toInteger(42); // 42
toInteger(100e10); // 1000000000000

// floats
toInteger(3.14); // 3
toInteger(-171.3); // -171

// strings
toInteger('42'); // 24
toInteger('3e8'); // 300000000
toInteger('8,675,309'); // 8675309  <-- thousand separators are commas
toInteger('8.675.309,123'); // 8675309  <-- thousand separators are decimal points

// bigint
toInteger(8675309n); // 8675309

// booleans
toInteger(true); // 1
toInteger(false); // 0

// dates
toInteger(new Date('2022-04-22T10:30:00.000Z')); // 1650623400000

// invalid values
toInteger(null); // throws ZeroDepError: Cannot convert to number
toInteger('asdf'); // throws ZeroDepError: Cannot convert to number
toInteger({ not: 'a number' }); // throws ZeroDepError: Cannot convert to number
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
npm i @zerodep/to-integer
```

then

```javascript
import { toInteger } from '@zerodep/app';
// or
import { toInteger } from '@zerodep/utilities';
// or
import { toInteger } from '@zerodep/to';
// or
import { toInteger } from '@zerodep/to-integer';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/to.integer` package to `@zerodep/to-integer` for consistency across @zerodep ecosystem
