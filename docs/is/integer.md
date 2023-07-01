# isInteger()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-integer?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-integer)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-integer?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-integer)
[![version](https://img.shields.io/npm/v/@zerodep/is-integer?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-integer)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is an integer.

## Signature

```typescript
const isInteger(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isInteger } from '@zerodep/is-integer';
// or
const { isInteger } = require('@zerodep/is-integer');
```

### Positive Response

```javascript
isInteger(42); // true
isInteger(new Number(-273)); // true
```

### Negative Response

```javascript
isInteger(Infinity); // false - CAUTION
isInteger(Number.isNan); // false - CAUTION

isInteger(['a', 'b', 'c']); // false
isInteger(1000n); // false
isInteger(true); // false
isInteger(new Date()); // false
isInteger(''); // false
isInteger(new Error('message')); // false
isInteger(3.14); // false
isInteger(() => 'function'); // false
isInteger(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isInteger(null); // false
isInteger({ an: 'object' }); // false
isInteger(new Promise(() => {})); // false
isInteger(/[regex]+/gi); // false
isInteger(new Set([1, 2, 3])); // false
isInteger('a string'); // false
isInteger(Symbol()); // false
isInteger(new Int32Array(2)); // false
isInteger(undefined); // false
```

## Installation Sources

This function is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep is functions
import { isInteger } from '@zerodep/is';

# only this @zerodep function
import { isInteger } from '@zerodep/is-integer';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.integer` package to `@zerodep/is-integer` for consistency across @zerodep ecosystem
