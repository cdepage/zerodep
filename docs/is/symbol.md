# isSymbol()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-symbol?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-symbol)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-symbol?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-symbol)
[![version](https://img.shields.io/npm/v/@zerodep/is-symbol?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-symbol)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a Symbol.

## Signature

```typescript
const isSymbol(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isSymbol } from '@zerodep/is-symbol';
// or
const { isSymbol } = require('@zerodep/is-symbol');
```

### Positive Response

```javascript
import { isSymbol } from '@zerodep/app';

isSymbol(Symbol()); // true
```

### Negative Response

```javascript
isSymbol(['a', 'b', 'c']); // false
isSymbol(1000n); // false
isSymbol(true); // false
isSymbol(new Date()); // false
isSymbol(''); // false
isSymbol(new Error('message')); // false
isSymbol(3.14); // false
isSymbol(() => 'function'); // false
isSymbol(42); // false
isSymbol(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isSymbol(null); // false
isSymbol({ an: 'object' }); // false
isSymbol(new Promise(() => {})); // false
isSymbol(/[regex]+/gi); // false
isSymbol(new Set([1, 2, 3])); // false
isSymbol('a string'); // false
isSymbol(new Int32Array(2)); // false
isSymbol(undefined); // false
```

## Installation Sources

This function is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep is functions
import { isSymbol } from '@zerodep/is';

# only this @zerodep function
import { isSymbol } from '@zerodep/is-symbol';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.symbol` package to `@zerodep/is-symbol` for consistency across @zerodep ecosystem
