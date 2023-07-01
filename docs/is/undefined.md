# isUndefined()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-array?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-array)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-array?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-array)
[![version](https://img.shields.io/npm/v/@zerodep/is-array?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-array)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a `undefined`.

## Signature

```typescript
const isUndefined(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isUndefined } from '@zerodep/is-undefined';
// or
const { isUndefined } = require('@zerodep/is-undefined');
```

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

This function is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep is functions
import { isUndefined } from '@zerodep/is';

# only this @zerodep function
import { isUndefined } from '@zerodep/is-undefined';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.undefined` package to `@zerodep/is-undefined` for consistency across @zerodep ecosystem
