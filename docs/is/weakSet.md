# isWeakSet()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-weakset?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-weakset)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-weakset?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-weakset)
[![version](https://img.shields.io/npm/v/@zerodep/is-weakset?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-weakset)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a Weak Set.

## Signature

```typescript
const isWeakSet(value: any) => boolean;
```

### Function Parameters

The `isWeakSet` function has the following parameters:

- **value** - the value to check

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isWeakSet } from '@zerodep/is-weakset';
// or
const { isWeakSet } = require('@zerodep/is-weakset');
```

### Positive Response

```javascript
// prepare a weak map
const ws = new WeakSet();
const obj = {};
ws.add(obj);

isWeakSet(ws); // true
```

### Negative Response

```javascript
isWeakSet(['a', 'b', 'c']); // false
isWeakSet(1000n); // false
isWeakSet(true); // false
isWeakSet(new Date()); // false
isWeakSet(''); // false
isWeakSet(new Error('message')); // false
isWeakSet(3.14); // false
isWeakSet(() => 'function'); // false
isWeakSet(42); // false
isWeakSet(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isWeakSet(null); // false
isWeakSet({ an: 'object' }); // false
isWeakSet(new Promise(() => {})); // false
isWeakSet(/[regex]+/gi); // false
isWeakSet(new Set([1, 2, 3])); // false
isWeakSet('a string'); // false
isWeakSet(Symbol()); // false
isWeakSet(new Int32Array(2)); // false
isWeakSet(undefined); // false
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "is" functions
npm i @zerodep/is

# only this @zerodep package
npm i @zerodep/is-weakset
```

then

```javascript
import { isWeakSet } from '@zerodep/app';
// or
import { isWeakSet } from '@zerodep/utilities';
// or
import { isWeakSet } from '@zerodep/is';
// or
import { isWeakSet } from '@zerodep/is-weakset';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.weakset` package to `@zerodep/is-weakset` for consistency across @zerodep ecosystem
