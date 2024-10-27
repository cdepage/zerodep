# isInteger()

[![version](https://img.shields.io/npm/v/@zerodep/is-integer?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-integer)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is an integer.

## Signature

```typescript
declare const isInteger: (value: unknown) => boolean;
```

### Function Parameters

The `isInteger` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isInteger } from '@zerodep/app';

// CJS
const { isInteger } = require('@zerodep/app');
```

```javascript
// Arrays
isInteger([]); // false
isInteger([1, 2, 3]); // false
isInteger(['a', 'b', 'c']); // false

// BigInts
isInteger(42n); // false
isInteger(0n); // false
isInteger(-0n); // false
isInteger(-42n); // false

// Booleans
isInteger(true); // false
isInteger(false); // false

// Class
isInteger(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isInteger(new Date()); // false
isInteger(new Date('1970-01-01T12:00:00.000Z')); // false
isInteger(new Date('2099-12-31')); // false

// Empty
isInteger(null); // false
isInteger(undefined); // false

// Errors
isInteger(new Error('message')); // false
isInteger(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isInteger(3.14); // false
isInteger(0.0); // true  <-- CAUTION: zero is allowed as an integer
isInteger(-0.0); // true  <-- CAUTION: zero is allowed as an integer
isInteger(-3.14); // false
isInteger(Math.E); // false
isInteger(Math.PI); // false
isInteger(Number.MIN_VALUE); // false

// Functions
isInteger(() => 'function'); // false
isInteger(async () => 'function'); // false

// Generators
isInteger(function* () {
  yield 'a';
}); // false
isInteger(async function* () {
  yield 'a';
}); // false

// Maps
isInteger(new Map()); // false
isInteger(new Map([['key1', 123]])); // false
isInteger(new Map([['key1', 'value1']])); // false

// Numbers
isInteger(Number.POSITIVE_INFINITY); // false
isInteger(Number.MAX_SAFE_INTEGER); // true
isInteger(3e8); // true
isInteger(42); // true
isInteger(1); // true
isInteger(0); // true
isInteger(-0); // true
isInteger(-1); // true
isInteger(-42); // true
isInteger(-3e8); // true
isInteger(Number.MIN_SAFE_INTEGER); // true
isInteger(Number.NEGATIVE_INFINITY); // false
isInteger(Number.NaN); // false

// POJOs
isInteger({}); // false
isInteger({ key: 'string' }); // false
isInteger({ key: 123 }); // false

// Promise
isInteger(new Promise(() => {})); // false
isInteger(new Promise.all([])); // false
isInteger(new Promise.allSettled([])); // false
isInteger(new Promise.race([])); // false
isInteger(Promise.resolve()); // false

// Regular Expression
isInteger(/[regex]+/gi); // false
isInteger(new RegExp('d', 'gi')); // false

// Sets
isInteger(new Set()); // false
isInteger(new Set([1, 2, 3])); // false
isInteger(new Set(['a', 'b', 'c'])); // false

// Strings
isInteger(''); // false
isInteger('a longer string'); // false
isInteger('1000n'); // false
isInteger('3e8'); // false
isInteger('42'); // false
isInteger('3.14'); // false
isInteger('0'); // false
isInteger('-0'); // false
isInteger('-3.14'); // false
isInteger('-42'); // false
isInteger('-3e8'); // false
isInteger('-1000n'); // false

// Symbols
isInteger(Symbol()); // false
isInteger(Symbol('name')); // false

// This
isInteger(this); // false
isInteger(globalThis); // false

// TypedArrays
isInteger(new Int8Array(2)); // false
isInteger(new Int16Array(2)); // false
isInteger(new Int32Array(2)); // false
isInteger(new Uint8Array(2)); // false
isInteger(new Uint16Array(2)); // false
isInteger(new Uint32Array(2)); // false
isInteger(new Uint8ClampedArray(2)); // false

isInteger(new BigInt64Array(2)); // false
isInteger(new BigUint64Array(2)); // false

isInteger(new Float32Array(2)); // false
isInteger(new Float64Array(2)); // false

isInteger(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isInteger(new WeakMap()); // false
isInteger(new WeakSet()); // false
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
npm i @zerodep/is-integer
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.integer` package to `@zerodep/is-integer` for consistency across @zerodep ecosystem
