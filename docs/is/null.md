# isNull()

[![version](https://img.shields.io/npm/v/@zerodep/is-null?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-null)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is `null`.

## Signature

```typescript
const isNull(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

### Positive Response

```javascript
isNull(null); // true
```

### Negative Response

```javascript
isNull(['a', 'b', 'c']); // false
isNull(1000n); // false
isNull(true); // false
isNull(new Date()); // false
isNull(''); // false
isNull(new Error('message')); // false
isNull(3.14); // false
isNull(() => 'function'); // false
isNull(42); // false
isNull(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isNull({ an: 'object' }); // false
isNull(new Promise(() => {})); // false
isNull(/[regex]+/gi); // false
isNull(new Set([1, 2, 3])); // false
isNull('a string'); // false
isNull(Symbol()); // false
isNull(new Int32Array(2)); // false
isNull(undefined); // false
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
npm i @zerodep/is-null
```

then

```javascript
import { isNull } from '@zerodep/app';
// or
import { isNull } from '@zerodep/utilities';
// or
import { isNull } from '@zerodep/is';
// or
import { isNull } from '@zerodep/is-null';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.null` package to `@zerodep/is-null` for consistency across @zerodep ecosystem
