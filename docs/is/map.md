# isMap()

[![version](https://img.shields.io/npm/v/@zerodep/is-map?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-map)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a Map.

## Signature

```typescript
declare const isMap: (value: unknown) => boolean;
```

### Function Parameters

The `isMap` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isMap } from '@zerodep/app';

// CJS
const { isMap } = require('@zerodep/app');
```

```javascript
// Arrays
isMap([]); // false
isMap([1, 2, 3]); // false
isMap(['a', 'b', 'c']); // false

// BigInts
isMap(42n); // false
isMap(0n); // false
isMap(-0n); // false
isMap(-42n); // false

// Booleans
isMap(true); // false
isMap(false); // false

// Class
isMap(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isMap(new Date()); // false
isMap(new Date('1970-01-01T12:00:00.000Z')); // false
isMap(new Date('2099-12-31')); // false

// Empty
isMap(null); // false
isMap(undefined); // false

// Errors
isMap(new Error('message')); // false
isMap(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isMap(3.14); // false
isMap(0.0); // false
isMap(-0.0); // false
isMap(-3.14); // false
isMap(Math.E); // false
isMap(Math.PI); // false
isMap(Number.MIN_VALUE); // false

// Functions
isMap(() => 'function'); // false
isMap(async () => 'function'); // false

// Generators
isMap(function* () {
  yield 'a';
}); // false
isMap(async function* () {
  yield 'a';
}); // false

// Maps
isMap(new Map()); // true
isMap(new Map([['key1', 123]])); // true
isMap(new Map([['key1', 'value1']])); // true

// Numbers
isMap(Number.POSITIVE_INFINITY); // false
isMap(Number.MAX_SAFE_INTEGER); // false
isMap(3e8); // false
isMap(42); // false
isMap(1); // false
isMap(0); // false
isMap(-0); // false
isMap(-1); // false
isMap(-42); // false
isMap(-3e8); // false
isMap(Number.MIN_SAFE_INTEGER); // false
isMap(Number.NEGATIVE_INFINITY); // false
isMap(Number.NaN); // false

// POJOs
isMap({}); // false
isMap({ key: 'string' }); // false
isMap({ key: 123 }); // false

// Promise
isMap(new Promise(() => {})); // false
isMap(new Promise.all([])); // false
isMap(new Promise.allSettled([])); // false
isMap(new Promise.race([])); // false
isMap(Promise.resolve()); // false

// Regular Expression
isMap(/[regex]+/gi); // false
isMap(new RegExp('d', 'gi')); // false

// Sets
isMap(new Set()); // false
isMap(new Set([1, 2, 3])); // false
isMap(new Set(['a', 'b', 'c'])); // false

// Strings
isMap(''); // false
isMap('a longer string'); // false
isMap('1000n'); // false
isMap('3e8'); // false
isMap('42'); // false
isMap('3.14'); // false
isMap('0'); // false
isMap('-0'); // false
isMap('-3.14'); // false
isMap('-42'); // false
isMap('-3e8'); // false
isMap('-1000n'); // false

// Symbols
isMap(Symbol()); // false
isMap(Symbol('name')); // false

// This
isMap(this); // false
isMap(globalThis); // false

// TypedArrays
isMap(new Int8Array(2)); // false
isMap(new Int16Array(2)); // false
isMap(new Int32Array(2)); // false
isMap(new Uint8Array(2)); // false
isMap(new Uint16Array(2)); // false
isMap(new Uint32Array(2)); // false
isMap(new Uint8ClampedArray(2)); // false

isMap(new BigInt64Array(2)); // false
isMap(new BigUint64Array(2)); // false

isMap(new Float32Array(2)); // false
isMap(new Float64Array(2)); // false

isMap(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isMap(new WeakMap()); // false
isMap(new WeakSet()); // false
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
npm i @zerodep/is-map
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.map` package to `@zerodep/is-map` for consistency across @zerodep ecosystem
