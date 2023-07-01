# isEmpty()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-empty?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-empty)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-empty?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-empty)
[![version](https://img.shields.io/npm/v/@zerodep/is-empty?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-empty)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is `null`, `undefined` or an empty array, string, object, Map, Set, WeakMap or WeakSet.

## Signature

```typescript
const isEmpty(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isEmpty } from '@zerodep/is-empty';
// or
const { isEmpty } = require('@zerodep/is-empty');
```

### Positive Response

```javascript
isEmpty([]); // true
isEmpty(''); // true
isEmpty(null); // true
isEmpty({}); // true
isEmpty(new Map()); // true
isEmpty(new Set()); // true
isEmpty(new WeakMap()); // true
isEmpty(new WeakSet()); // true
isEmpty(undefined); // true
```

### Negative Response

```javascript
isEmpty(['a', 'b', 'c']); // false
isEmpty(1000n); // false
isEmpty(true); // false
isEmpty(new Date()); // false
isEmpty(new Error('message')); // false
isEmpty(3.14); // false
isEmpty(() => 'function'); // false
isEmpty(42); // false
isEmpty(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isEmpty({ an: 'object' }); // false
isEmpty(new Promise(() => {})); // false
isEmpty(/[regex]+/gi); // false
isEmpty(new Set([1, 2, 3])); // false
isEmpty('a string'); // false
isEmpty(Symbol()); // false
isEmpty(new Int32Array(2)); // false
```

## Installation Sources

This function is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages - largest file size
npm i @zerodep/app

# all @zerodep utility functions - medium file size
npm i @zerodep/utility

// all @zerodep is functions
import { isEmpty } from '@zerodep/is';

# only this @zerodep function
import { isEmpty } from '@zerodep/is-empty';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.empty` package to `@zerodep/is-empty` for consistency across @zerodep ecosystem
