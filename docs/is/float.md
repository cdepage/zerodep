# isFloat()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-float?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-float)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-float?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-float)
[![version](https://img.shields.io/npm/v/@zerodep/is-float?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-float)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a float.

## Signature

```typescript
const isFloat(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isFloat } from '@zerodep/is-float';
// or
const { isFloat } = require('@zerodep/is-float');
```

### Positive Response

```javascript
isFloat(3.14); // true
isFloat(new Number(98.6)); // true
```

### Negative Response

```javascript
isFloat(Infinity); // false - CAUTION
isFloat(Number.isNan); // false - CAUTION

isFloat(['a', 'b', 'c']); // false
isFloat(1000n); // false
isFloat(true); // false
isFloat(new Date()); // false
isFloat(''); // false
isFloat(new Error('message')); // false
isFloat(() => 'function'); // false
isFloat(42); // false
isFloat(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isFloat(null); // false
isFloat({ an: 'object' }); // false
isFloat(new Promise(() => {})); // false
isFloat(/[regex]+/gi); // false
isFloat(new Set([1, 2, 3])); // false
isFloat('a string'); // false
isFloat(Symbol()); // false
isFloat(new Int32Array(2)); // false
isFloat(undefined); // false
```

## Installation Sources

This function is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep is functions
import { isFloat } from '@zerodep/is';

# only this @zerodep function
import { isFloat } from '@zerodep/is-float';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.float` package to `@zerodep/is-float` for consistency across @zerodep ecosystem
