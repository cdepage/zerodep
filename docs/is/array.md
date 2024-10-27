# isArray()

[![version](https://img.shields.io/npm/v/@zerodep/is-array?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-array)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is an array.

## Signature

```typescript
declare const isArray (value: unknown) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isArray } from '@zerodep/app';

// CJS
const { isArray } = require('@zerodep/app');
```

```javascript
// Arrays
isArray([]); // true
isArray([1, 2, 3]); // true
isArray(['a', 'b', 'c']); // true

// BigInts
isArray(42n); // false
isArray(0n); // false
isArray(-0n); // false
isArray(-42n); // false

// Booleans
isArray(true); // false
isArray(false); // false

// Class
isArray(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isArray(new Date()); // false
isArray(new Date('1970-01-01T12:00:00.000Z')); // true
isArray(new Date('2099-12-31')); // true

// Empty
isArray(null); // false
isArray(undefined); // false

// Errors
isArray(new Error('message')); // false
isArray(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isArray(3.14); // false
isArray(0.0); // false
isArray(-0.0); // false
isArray(-3.14); // false
isArray(Math.E); // false
isArray(Math.PI); // false
isArray(Number.MIN_VALUE); // false

// Functions
isArray(() => 'function'); // false
isArray(async () => 'function'); // false

// Generators
isArray(function* () {
  yield 'a';
}); // false
isArray(async function* () {
  yield 'a';
}); // false

// Maps
isArray(new Map()); // false
isArray(new Map([['key1', 123]])); // false
isArray(new Map([['key1', 'value1']])); // false

// Numbers
isArray(Number.POSITIVE_INFINITY); // false
isArray(Number.MAX_SAFE_INTEGER); // false
isArray(Number.MAX_VALUE); // false
isArray(3e8); // false
isArray(42); // false
isArray(1); // false
isArray(0); // false
isArray(-0); // false
isArray(-1); // false
isArray(-42); // false
isArray(-3e8); // false
isArray(Number.MIN_SAFE_INTEGER); // false
isArray(Number.NEGATIVE_INFINITY); // false
isArray(Number.NaN); // false

// POJOs
isArray({}); // false
isArray({ key: 'string' }); // false
isArray({ key: 123 }); // false

// Promise
isArray(new Promise(() => {})); // false
isArray(new Promise.all([])); // false
isArray(new Promise.allSettled([])); // false
isArray(new Promise.race([])); // false
isArray(Promise.resolve()); // false

// Regular Expression
isArray(/[regex]+/gi); // false
isArray(new RegExp('d', 'gi')); // false

// Sets
isArray(new Set()); // false
isArray(new Set([1, 2, 3])); // false
isArray(new Set(['a', 'b', 'c'])); // false

// Strings
isArray(''); // false
isArray('a longer string'); // false
isArray('1000n'); // false
isArray('3e8'); // false
isArray('42'); // false
isArray('3.14'); // false
isArray('0'); // false
isArray('-0'); // false
isArray('-3.14'); // false
isArray('-42'); // false
isArray('-3e8'); // false
isArray('-1000n'); // false

// Symbols
isArray(Symbol()); // false
isArray(Symbol('name')); // false

// This
isArray(this); // false
isArray(globalThis); // false

// TypedArrays
isArray(new Int8Array(2)); // false
isArray(new Int16Array(2)); // false
isArray(new Int32Array(2)); // false
isArray(new Uint8Array(2)); // false
isArray(new Uint16Array(2)); // false
isArray(new Uint32Array(2)); // false
isArray(new Uint8ClampedArray(2)); // false

isArray(new BigInt64Array(2)); // false
isArray(new BigUint64Array(2)); // false

isArray(new Float32Array(2)); // false
isArray(new Float64Array(2)); // false

isArray(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isArray(new WeakMap()); // false
isArray(new WeakSet()); // false
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
npm i @zerodep/is-array
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.array` package to `@zerodep/is-array` for consistency across @zerodep ecosystem
