# isFunction()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-function?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-function)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-function?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-function)
[![version](https://img.shields.io/npm/v/@zerodep/is-function?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-function)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a function.

## Signature

```typescript
const isFunction(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

### Positive Response

```javascript
isFunction(() => 'function'); // true
isFunction(new Function('return true')); // true
```

### Negative Response

```javascript
isFunction(['a', 'b', 'c']); // false
isFunction(1000n); // false
isFunction(true); // false
isFunction(new Date()); // false
isFunction(''); // false
isFunction(new Error('message')); // false
isFunction(3.14); // false
isFunction(42); // false
isFunction(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isFunction(null); // false
isFunction({ an: 'object' }); // false
isFunction(new Promise(() => {})); // false
isFunction(/[regex]+/gi); // false
isFunction(new Set([1, 2, 3])); // false
isFunction('a string'); // false
isFunction(Symbol()); // false
isFunction(new Int32Array(2)); // false
isFunction(undefined); // false
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
npm i @zerodep/is-function
```

then

```javascript
import { isFunction } from '@zerodep/app';
// or
import { isFunction } from '@zerodep/utilities';
// or
import { isFunction } from '@zerodep/is';
// or
import { isFunction } from '@zerodep/is-function';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.function` package to `@zerodep/is-function` for consistency across @zerodep ecosystem
