# isObject()

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-object?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-object)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-object?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-object)
[![version](https://img.shields.io/npm/v/@zerodep/is-object?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-object)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a non-null object.

## Signature

```typescript
const isObject(value: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

### Positive Response

```javascript
isObject({ an: 'object' }); // true
```

### Negative Response

```javascript
isObject(null); // false - CAUTION

isObject(['a', 'b', 'c']); // false
isObject(1000n); // false
isObject(true); // false
isObject(new Date()); // false
isObject(''); // false
isObject(new Error('message')); // false
isObject(3.14); // false
isObject(() => 'function'); // false
isObject(42); // false
isObject(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isObject(new Promise(() => {})); // false
isObject(/[regex]+/gi); // false
isObject(new Set([1, 2, 3])); // false
isObject('a string'); // false
isObject(Symbol()); // false
isObject(new Int32Array(2)); // false
isObject(undefined); // false
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
npm i @zerodep/is-object
```

then

```javascript
import { isObject } from '@zerodep/app';
// or
import { isObject } from '@zerodep/utilities';
// or
import { isObject } from '@zerodep/is';
// or
import { isObject } from '@zerodep/is-object';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.object` package to `@zerodep/is-object` for consistency across @zerodep ecosystem
