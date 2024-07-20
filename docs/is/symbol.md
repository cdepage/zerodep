# isSymbol()

[![version](https://img.shields.io/npm/v/@zerodep/is-symbol?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-symbol)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a Symbol.

## Signature

```typescript
const isSymbol(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

### Positive Response

```javascript
import { isSymbol } from '@zerodep/app';

isSymbol(Symbol()); // true
```

### Negative Response

```javascript
isSymbol(['a', 'b', 'c']); // false
isSymbol(1000n); // false
isSymbol(true); // false
isSymbol(new Date()); // false
isSymbol(''); // false
isSymbol(new Error('message')); // false
isSymbol(3.14); // false
isSymbol(() => 'function'); // false
isSymbol(42); // false
isSymbol(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isSymbol(null); // false
isSymbol({ an: 'object' }); // false
isSymbol(new Promise(() => {})); // false
isSymbol(/[regex]+/gi); // false
isSymbol(new Set([1, 2, 3])); // false
isSymbol('a string'); // false
isSymbol(new Int32Array(2)); // false
isSymbol(undefined); // false
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
npm i @zerodep/is-symbol
```

then

```javascript
import { isSymbol } from '@zerodep/app';
// or
import { isSymbol } from '@zerodep/utilities';
// or
import { isSymbol } from '@zerodep/is';
// or
import { isSymbol } from '@zerodep/is-symbol';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.symbol` package to `@zerodep/is-symbol` for consistency across @zerodep ecosystem
