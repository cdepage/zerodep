# isError()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-error?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-error)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-error?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-error)
[![version](https://img.shields.io/npm/v/@zerodep/is-error?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-error)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is an Error.

## Signature

```typescript
const isError(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isError } from '@zerodep/is-error';
// or
const { isError } = require('@zerodep/is-error');
```

### Positive Response

```javascript
isError(new Error('message')); // true
```

### Negative Response

```javascript
isError(['a', 'b', 'c']); // false
isError(1000n); // false
isError(true); // false
isError(new Date()); // false
isError(''); // false
isError(3.14); // false
isError(() => 'function'); // false
isError(42); // false
isError(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isError(null); // false
isError({ an: 'object' }); // false
isError(new Promise(() => {})); // false
isError(/[regex]+/gi); // false
isError(new Set([1, 2, 3])); // false
isError('a string'); // false
isError(Symbol()); // false
isError(new Int32Array(2)); // false
isError(undefined); // false
```

## Installation Sources

This function is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep is functions
import { isError } from '@zerodep/is';

# only this @zerodep function
import { isError } from '@zerodep/is-error';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.error` package to `@zerodep/is-error` for consistency across @zerodep ecosystem
