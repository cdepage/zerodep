# isNil()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-nil?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-nil)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-nil?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-nil)
[![version](https://img.shields.io/npm/v/@zerodep/is-nil?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-nil)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is `null` or `undefined`.

## Signature

```typescript
const isNil(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isNil } from '@zerodep/is-nil';
// or
const { isNil } = require('@zerodep/is-nil');
```

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

This function is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep is functions
import { isNil } from '@zerodep/is';

# only this @zerodep function
import { isNil } from '@zerodep/is-nil';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.nil` package to `@zerodep/is-nil` for consistency across @zerodep ecosystem
