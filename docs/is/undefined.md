# isUndefined()

[![version](https://img.shields.io/npm/v/@zerodep/is-array?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-array)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a `undefined`.

## Signature

```typescript
const isUndefined(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

### Positive Response

```javascript
isUndefined(undefined); // true
```

### Negative Response

```javascript
isUndefined(['a', 'b', 'c']); // false
isUndefined(1000n); // false
isUndefined(true); // false
isUndefined(new Date()); // false
isUndefined(''); // false
isUndefined(new Error('message')); // false
isUndefined(3.14); // false
isUndefined(() => 'function'); // false
isUndefined(42); // false
isUndefined(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isUndefined(null); // false
isUndefined({ an: 'object' }); // false
isUndefined(new Promise(() => {})); // false
isUndefined(/[regex]+/gi); // false
isUndefined(new Set([1, 2, 3])); // false
isUndefined('a string'); // false
isUndefined(Symbol()); // false
isUndefined(new Int32Array(2)); // false
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
npm i @zerodep/is-undefined
```

then

```javascript
import { isUndefined } from '@zerodep/app';
// or
import { isUndefined } from '@zerodep/utilities';
// or
import { isUndefined } from '@zerodep/is';
// or
import { isUndefined } from '@zerodep/is-undefined';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.undefined` package to `@zerodep/is-undefined` for consistency across @zerodep ecosystem
