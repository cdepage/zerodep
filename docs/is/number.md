# isNumber()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-number?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-number)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-number?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-number)
[![version](https://img.shields.io/npm/v/@zerodep/is-number?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-number)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a finite number.

## Signature

```typescript
const isNumber(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isNumber } from '@zerodep/is-number';
// or
const { isNumber } = require('@zerodep/is-number');
```

### Positive Response

```javascript
isNumber(3.14); // true
isNumber(42); // true
```

### Negative Response

```javascript
isNumber(Infinity); // false - CAUTION
isNumber(Number.isNan); // false - CAUTION

isNumber(['a', 'b', 'c']); // false
isNumber(1000n); // false
isNumber(true); // false
isNumber(new Date()); // false
isNumber(''); // false
isNumber(new Error('message')); // false
isNumber(() => 'function'); // false
isNumber(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isNumber(null); // false
isNumber({ an: 'object' }); // false
isNumber(new Promise(() => {})); // false
isNumber(/[regex]+/gi); // false
isNumber(new Set([1, 2, 3])); // false
isNumber('a string'); // false
isNumber(Symbol()); // false
isNumber(new Int32Array(2)); // false
isNumber(undefined); // false
```

## Installation Sources

This function is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep is functions
import { isNumber } from '@zerodep/is';

# only this @zerodep function
import { isNumber } from '@zerodep/is-number';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.number` package to `@zerodep/is-number` for consistency across @zerodep ecosystem
