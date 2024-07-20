# isInteger()

[![version](https://img.shields.io/npm/v/@zerodep/is-integer?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-integer)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is an integer.

## Signature

```typescript
const isInteger(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

### Positive Response

```javascript
isInteger(42); // true
isInteger(new Number(-273)); // true
```

### Negative Response

```javascript
isInteger(Infinity); // false - CAUTION
isInteger(Number.isNan); // false - CAUTION

isInteger(['a', 'b', 'c']); // false
isInteger(1000n); // false
isInteger(true); // false
isInteger(new Date()); // false
isInteger(''); // false
isInteger(new Error('message')); // false
isInteger(3.14); // false
isInteger(() => 'function'); // false
isInteger(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isInteger(null); // false
isInteger({ an: 'object' }); // false
isInteger(new Promise(() => {})); // false
isInteger(/[regex]+/gi); // false
isInteger(new Set([1, 2, 3])); // false
isInteger('a string'); // false
isInteger(Symbol()); // false
isInteger(new Int32Array(2)); // false
isInteger(undefined); // false
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "is" functions
npm i @zerodep/is

# only this @zerodep package
npm i @zerodep/is-integer
```

then

```javascript
import { isInteger } from '@zerodep/app';
// or
import { isInteger } from '@zerodep/utilities';
// or
import { isInteger } from '@zerodep/is';
// or
import { isInteger } from '@zerodep/is-integer';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.integer` package to `@zerodep/is-integer` for consistency across @zerodep ecosystem
