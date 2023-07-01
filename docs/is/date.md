# isDate()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-date?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-date)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-date?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-date)
[![version](https://img.shields.io/npm/v/@zerodep/is-date?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-date)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a Date object.

## Signature

```typescript
const isDate(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isDate } from '@zerodep/is-date';
// or
const { isDate } = require('@zerodep/is-date');
```

### Positive Response

```javascript
isDate(new Date()); // true
```

### Negative Response

```javascript
isDate(['a', 'b', 'c']); // false
isDate(1000n); // false
isDate(true); // false
isDate(''); // false
isDate(new Error('message')); // false
isDate(3.14); // false
isDate(() => 'function'); // false
isDate(42); // false
isDate(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isDate(null); // false
isDate({ an: 'object' }); // false
isDate(new Promise(() => {})); // false
isDate(/[regex]+/gi); // false
isDate(new Set([1, 2, 3])); // false
isDate('a string'); // false
isDate(Symbol()); // false
isDate(new Int32Array(2)); // false
isDate(undefined); // false
```

## Installation Sources

This function is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep is functions
import { isDate } from '@zerodep/is';

# only this @zerodep function
import { isDate } from '@zerodep/is-date';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.date` package to `@zerodep/is-date` for consistency across @zerodep ecosystem
