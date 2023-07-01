# is-weakmap()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-weakmap?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-weakmap)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-weakmap?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-weakmap)
[![version](https://img.shields.io/npm/v/@zerodep/is-weakmap?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-weakmap)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a Weak Map.

## Signature

```typescript
const isWeakmap(value: any) => boolean;
```

### Function Parameters

The `isWeakmap` function has the following parameters:

- **value** - the value to check

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isWeakmap } from '@zerodep/is-weakmap';
// or
const { isWeakmap } = require('@zerodep/is-weakmap');
```

### Positive Response

```javascript
// prepare a weak map
cost obj = {}
const wm = new WeakMap();
wm.set(obj, 37);

is-weakmap(wm); // true
```

### Negative Response

```javascript
is - weakmap(['a', 'b', 'c']); // false
is - weakmap(1000n); // false
is - weakmap(true); // false
is - weakmap(new Date()); // false
is - weakmap(''); // false
is - weakmap(new Error('message')); // false
is - weakmap(3.14); // false
is - weakmap(() => 'function'); // false
is - weakmap(42); // false
is -
  weakmap(
    new Map([
      ['a', 1],
      ['b', 2],
    ])
  ); // false
is - weakmap(null); // false
is - weakmap({ an: 'object' }); // false
is - weakmap(new Promise(() => {})); // false
is - weakmap(/[regex]+/gi); // false
is - weakmap(new Set([1, 2, 3])); // false
is - weakmap('a string'); // false
is - weakmap(Symbol()); // false
is - weakmap(new Int32Array(2)); // false
is - weakmap(undefined); // false
```

## Installation Sources

This function is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep is functions
import { is-weakmap } from '@zerodep/is';

# only this @zerodep function
import { is-weakmap } from '@zerodep/is-weakmap';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.weakmap` package to `@zerodep/is-weakmap` for consistency across @zerodep ecosystem
