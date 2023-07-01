# isBigInt()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-bigint?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-bigint)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-bigint?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-bigint)
[![version](https://img.shields.io/npm/v/@zerodep/is-bigint?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-bigint)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a BigInt.

## Signature

```typescript
const isBigInt(value: any) => boolean;
```

### Function Parameters

The `isBigInt` function has the following parameters:

- **value** - the value to check

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isBigInt } from '@zerodep/is-bigint';
// or
const { isBigInt } = require('@zerodep/is-bigint');
```

### Positive Response

```javascript
isBigInt(1000n); // true
isBigInt(BigInt(Number.MAX_VALUE + 1)); // true
```

### Negative Response

```javascript
isBigInt(['a', 'b', 'c']); // false
isBigInt(true); // false
isBigInt(new Date()); // false
isBigInt(''); // false
isBigInt(new Error('message')); // false
isBigInt(3.14); // false
isBigInt(() => 'function'); // false
isBigInt(42); // false
isBigInt(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isBigInt(null); // false
isBigInt({ an: 'object' }); // false
isBigInt(new Promise(() => {})); // false
isBigInt(/[regex]+/gi); // false
isBigInt(new Set([1, 2, 3])); // false
isBigInt('a string'); // false
isBigInt(Symbol()); // false
isBigInt(new Int32Array(2)); // false
isBigInt(undefined); // false
```

## Installation Sources

This function is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep is functions - small file size
import { isBigInt } from '@zerodep/is';

# only this @zerodep function - tiny file size
import { isBigInt } from '@zerodep/is-bigint';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.bigint` package to `@zerodep/is-bigint` for consistency across @zerodep ecosystem
