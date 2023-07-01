# isArray()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-array?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-array)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-array?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-array)
[![version](https://img.shields.io/npm/v/@zerodep/is-array?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-array)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is an array.

## Signature

```typescript
const isArray: (value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isArray } from '@zerodep/is-array';
// or
const { isArray } = require('@zerodep/is-array');
```

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

This function is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep is functions - small file size
import { isArray } from '@zerodep/is';

# only this @zerodep function - tiny file size
import { isArray } from '@zerodep/is-array';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.array` package to `@zerodep/is-array` for consistency across @zerodep ecosystem
