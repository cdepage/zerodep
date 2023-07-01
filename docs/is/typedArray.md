# isTypedArray()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-typedarray?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-typedarray)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-typedarray?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-typedarray)
[![version](https://img.shields.io/npm/v/@zerodep/is-typedarray?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-typedarray)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a Typed Array.

## Signature

```typescript
const isTypedArray(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isTypedArray } from '@zerodep/is-typedarray';
// or
const { isTypedArray } = require('@zerodep/is-typedarray');
```

### Positive Response

```javascript
isTypedArray(new Int8Array(2)); // true
isTypedArray(new Uint8Array(2)); // true
isTypedArray(new Uint8ClampedArray(2)); // true
isTypedArray(new Int16Array(2)); // true
isTypedArray(new Uint16Array(2)); // true
isTypedArray(new Int32Array(2)); // true
isTypedArray(new Uint32Array(2)); // true
isTypedArray(new Float32Array(2)); // true
isTypedArray(new Float64Array(2)); // true
```

### Negative Response

```javascript
isTypedArray(['a', 'b', 'c']); // false
isTypedArray(1000n); // false
isTypedArray(true); // false
isTypedArray(new Date()); // false
isTypedArray(''); // false
isTypedArray(new Error('message')); // false
isTypedArray(3.14); // false
isTypedArray(() => 'function'); // false
isTypedArray(42); // false
isTypedArray(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isTypedArray(null); // false
isTypedArray({ an: 'object' }); // false
isTypedArray(new Promise(() => {})); // false
isTypedArray(/[regex]+/gi); // false
isTypedArray(new Set([1, 2, 3])); // false
isTypedArray('a string'); // false
isTypedArray(Symbol()); // false
isTypedArray(undefined); // false
```

## Installation Sources

This function is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep is functions
import { isTypedArray } from '@zerodep/is';

# only this @zerodep function
import { isTypedArray } from '@zerodep/is-typedarray';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.typedarray` package to `@zerodep/is-typedarray` for consistency across @zerodep ecosystem
