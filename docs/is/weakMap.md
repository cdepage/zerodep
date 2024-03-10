# is-weakmap()

[![version](https://img.shields.io/npm/v/@zerodep/is-weakmap?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-weakmap)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A simple, performant utility to determine if a value is a Weak Map.

## Signature

```typescript
const isWeakMap(value: any) => boolean;
```

### Function Parameters

The `isWeakMap` function has the following parameters:

- **value** - the value to check

## Examples

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```javascript
import { isWeakMap } from '@zerodep/is-weakmap';
// or
const { isWeakMap } = require('@zerodep/is-weakmap');
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
isWeakMap(['a', 'b', 'c']); // false
isWeakMap(1000n); // false
isWeakMap(true); // false
isWeakMap(new Date()); // false
isWeakMap(''); // false
isWeakMap(new Error('message')); // false
isWeakMap(3.14); // false
isWeakMap(() => 'function'); // false
isWeakMap(42); // false
isWeakMap(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isWeakMap(null); // false
isWeakMap({ an: 'object' }); // false
isWeakMap(new Promise(() => {})); // false
isWeakMap(/[regex]+/gi); // false
isWeakMap(new Set([1, 2, 3])); // false
isWeakMap('a string'); // false
isWeakMap(Symbol()); // false
isWeakMap(new Int32Array(2)); // false
isWeakMap(undefined); // false
```

## Installation Sources

This function is available from any of the following packages to best match the needs of your project. All packages support tree shaking.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "is" functions
@zerodep/is

# only this @zerodep package
npm i @zerodep/is-weakmap
```

then

```javascript
import { isWeakMap } from '@zerodep/app';
// or
import { isWeakMap } from '@zerodep/utilities';
// or
import { isWeakMap } from '@zerodep/is';
// or
import { isWeakMap } from '@zerodep/is-weakmap';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.weakmap` package to `@zerodep/is-weakmap` for consistency across @zerodep ecosystem
