# isArray()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-array?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-array)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-array?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-array)
[![version](https://img.shields.io/npm/v/@zerodep/is-array?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-array)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is an array.

## Signature

```typescript
const isArray: (value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

### Positive Response

```javascript
isArray([]); // true
isArray(['a', 'b', 'c']); // true
```

### Negative Response

```javascript
isArray(1000n); // false
isArray(true); // false
isArray(new Date()); // false
isArray(''); // false
isArray(new Error('message')); // false
isArray(3.14); // false
isArray(() => 'function'); // false
isArray(42); // false
isArray(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isArray(null); // false
isArray({ an: 'object' }); // false
isArray(new Promise(() => {})); // false
isArray(/[regex]+/gi); // false
isArray(new Set([1, 2, 3])); // false
isArray('a string'); // false
isArray(Symbol()); // false
isArray(new Int32Array(2)); // false
isArray(undefined); // false
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
npm i @zerodep/is-array
```

then

```javascript
import { isArray } from '@zerodep/app';
// or
import { isArray } from '@zerodep/utilities';
// or
import { isArray } from '@zerodep/is';
// or
import { isArray } from '@zerodep/is-array';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.array` package to `@zerodep/is-array` for consistency across @zerodep ecosystem
