# isFloat()

[![version](https://img.shields.io/npm/v/@zerodep/is-float?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-float)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a float.

## Signature

```typescript
declare const isFloat: (value: unknown) => boolean;
```

### Function Parameters

The `isFloat` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isFloat } from '@zerodep/app';

// CJS
const { isFloat } = require('@zerodep/app');
```

```javascript
// Arrays
isFloat([]); // false
isFloat([1, 2, 3]); // false
isFloat(['a', 'b', 'c']); // false

// BigInts
isFloat(42n); // false
isFloat(0n); // false
isFloat(-0n); // false
isFloat(-42n); // false

// Booleans
isFloat(true); // false
isFloat(false); // false

// Class
isFloat(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isFloat(new Date()); // false
isFloat(new Date('1970-01-01T12:00:00.000Z')); // false
isFloat(new Date('2099-12-31')); // false

// Empty
isFloat(null); // false
isFloat(undefined); // false

// Errors
isFloat(new Error('message')); // false
isFloat(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isFloat(3.14); // true
isFloat(0.0); // true  <-- CAUTION: zero is allowed as a float
isFloat(-0.0); // true  <-- CAUTION: zero is allowed as a float
isFloat(-3.14); // true
isFloat(Math.E); // true
isFloat(Math.PI); // true
isFloat(Number.MIN_VALUE); // true

// Functions
isFloat(() => 'function'); // false
isFloat(async () => 'function'); // false

// Generators
isFloat(function* () {
  yield 'a';
}); // false
isFloat(async function* () {
  yield 'a';
}); // false

// Maps
isFloat(new Map()); // false
isFloat(new Map([['key1', 123]])); // false
isFloat(new Map([['key1', 'value1']])); // false

// Numbers
isFloat(Number.POSITIVE_INFINITY); // false
isFloat(Number.MAX_SAFE_INTEGER); // false
isFloat(3e8); // false
isFloat(42); // false
isFloat(1); // false
isFloat(0); // true  <-- CAUTION: zero is allowed as a float
isFloat(-0); // true  <-- CAUTION: zero is allowed as a float
isFloat(-1); // false
isFloat(-42); // false
isFloat(-3e8); // false
isFloat(Number.MIN_SAFE_INTEGER); // false
isFloat(Number.NEGATIVE_INFINITY); // false
isFloat(Number.NaN); // false

// POJOs
isFloat({}); // false
isFloat({ key: 'string' }); // false
isFloat({ key: 123 }); // false

// Promise
isFloat(new Promise(() => {})); // false
isFloat(new Promise.all([])); // false
isFloat(new Promise.allSettled([])); // false
isFloat(new Promise.race([])); // false
isFloat(Promise.resolve()); // false

// Regular Expression
isFloat(/[regex]+/gi); // false
isFloat(new RegExp('d', 'gi')); // false

// Sets
isFloat(new Set()); // false
isFloat(new Set([1, 2, 3])); // false
isFloat(new Set(['a', 'b', 'c'])); // false

// Strings
isFloat(''); // false
isFloat('a longer string'); // false
isFloat('1000n'); // false
isFloat('3e8'); // false
isFloat('42'); // false
isFloat('3.14'); // false
isFloat('0'); // false
isFloat('-0'); // false
isFloat('-3.14'); // false
isFloat('-42'); // false
isFloat('-3e8'); // false
isFloat('-1000n'); // false

// Symbols
isFloat(Symbol()); // false
isFloat(Symbol('name')); // false

// This
isFloat(this); // false
isFloat(globalThis); // false

// TypedArrays
isFloat(new Int8Array(2)); // false
isFloat(new Int16Array(2)); // false
isFloat(new Int32Array(2)); // false
isFloat(new Uint8Array(2)); // false
isFloat(new Uint16Array(2)); // false
isFloat(new Uint32Array(2)); // false
isFloat(new Uint8ClampedArray(2)); // false

isFloat(new BigInt64Array(2)); // false
isFloat(new BigUint64Array(2)); // false

isFloat(new Float32Array(2)); // false
isFloat(new Float64Array(2)); // false

isFloat(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isFloat(new WeakMap()); // false
isFloat(new WeakSet()); // false
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
npm i @zerodep/is-float
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.1.x

**Fixed**

- the `isFloat()` function to properly handle zero values

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.float` package to `@zerodep/is-float` for consistency across @zerodep ecosystem
