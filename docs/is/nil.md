# isNil()

[![version](https://img.shields.io/npm/v/@zerodep/is-nil?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-nil)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is `null` or `undefined`.

## Signature

```typescript
const isNil(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

Z

### Positive Response

```javascript
isNil(null); // true
isNil(undefined); // true
```

### Negative Response

```javascript
isNil(''); // false - CAUTION

isNil(['a', 'b', 'c']); // false
isNil(1000n); // false
isNil(true); // false
isNil(new Date()); // false
isNil(new Error('message')); // false
isNil(3.14); // false
isNil(() => 'function'); // false
isNil(42); // false
isNil(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isNil({ an: 'object' }); // false
isNil(new Promise(() => {})); // false
isNil(/[regex]+/gi); // false
isNil(new Set([1, 2, 3])); // false
isNil('a string'); // false
isNil(Symbol()); // false
isNil(new Int32Array(2)); // false
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
npm i @zerodep/is-nil
```

then

```javascript
import { isNil } from '@zerodep/app';
// or
import { isNil } from '@zerodep/utilities';
// or
import { isNil } from '@zerodep/is';
// or
import { isNil } from '@zerodep/is-nil';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.nil` package to `@zerodep/is-nil` for consistency across @zerodep ecosystem
