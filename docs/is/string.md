# isString()

[![version](https://img.shields.io/npm/v/@zerodep/is-string?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-string)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a string.

## Signature

```typescript
const isString(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

### Positive Response

```javascript
import { isString } from '@zerodep/app';

isString(''); // true
isString('a string'); // true
isString(new String('a string')); // true
```

### Negative Response

```javascript
isString(['a', 'b', 'c']); // false
isString(1000n); // false
isString(true); // false
isString(new Date()); // false
isString(new Error('message')); // false
isString(3.14); // false
isString(() => 'function'); // false
isString(42); // false
isString(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isString(null); // false
isString({ an: 'object' }); // false
isString(new Promise(() => {})); // false
isString(/[regex]+/gi); // false
isString(new Set([1, 2, 3])); // false
isString(Symbol()); // false
isString(new Int32Array(2)); // false
isString(undefined); // false
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
npm i @zerodep/is-string
```

then

```javascript
import { isString } from '@zerodep/app';
// or
import { isString } from '@zerodep/utilities';
// or
import { isString } from '@zerodep/is';
// or
import { isString } from '@zerodep/is-string';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.string` package to `@zerodep/is-string` for consistency across @zerodep ecosystem
