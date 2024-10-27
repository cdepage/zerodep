# isNumber()

[![version](https://img.shields.io/npm/v/@zerodep/is-number?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-number)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a finite number.

## Signature

```typescript
declare const isNumber: (value: unknown) => boolean;
```

### Function Parameters

The `isNumber` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isNumber } from '@zerodep/app';

// CJS
const { isNumber } = require('@zerodep/app');
```

```javascript
// Arrays
isNumber([]); // false
isNumber([1, 2, 3]); // false
isNumber(['a', 'b', 'c']); // false

// BigInts
isNumber(42n); // false
isNumber(0n); // false
isNumber(-0n); // false
isNumber(-42n); // false

// Booleans
isNumber(true); // false
isNumber(false); // false

// Class
isNumber(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isNumber(new Date()); // false
isNumber(new Date('1970-01-01T12:00:00.000Z')); // false
isNumber(new Date('2099-12-31')); // false

// Empty
isNumber(null); // false
isNumber(undefined); // false

// Errors
isNumber(new Error('message')); // false
isNumber(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isNumber(3.14); // true
isNumber(0.0); // true
isNumber(-0.0); // true
isNumber(-3.14); // true
isNumber(Math.E); // true
isNumber(Math.PI); // true
isNumber(Number.MIN_VALUE); // true

// Functions
isNumber(() => 'function'); // false
isNumber(async () => 'function'); // false

// Generators
isNumber(function* () {
  yield 'a';
}); // false
isNumber(async function* () {
  yield 'a';
}); // false

// Maps
isNumber(new Map()); // false
isNumber(new Map([['key1', 123]])); // false
isNumber(new Map([['key1', 'value1']])); // false

// Numbers
isNumber(Number.POSITIVE_INFINITY); // false  <-- CAUTION: infinite numbers are excluded
isNumber(Number.MAX_SAFE_INTEGER); // true
isNumber(3e8); // true
isNumber(42); // true
isNumber(1); // true
isNumber(0); // true
isNumber(-0); // true
isNumber(-1); // true
isNumber(-42); // true
isNumber(-3e8); // true
isNumber(Number.MIN_SAFE_INTEGER); // true
isNumber(Number.NEGATIVE_INFINITY); // false  <-- CAUTION: infinite numbers are excluded
isNumber(Number.NaN); // false

// POJOs
isNumber({}); // false
isNumber({ key: 'string' }); // false
isNumber({ key: 123 }); // false

// Promise
isNumber(new Promise(() => {})); // false
isNumber(new Promise.all([])); // false
isNumber(new Promise.allSettled([])); // false
isNumber(new Promise.race([])); // false
isNumber(Promise.resolve()); // false

// Regular Expression
isNumber(/[regex]+/gi); // false
isNumber(new RegExp('d', 'gi')); // false

// Sets
isNumber(new Set()); // false
isNumber(new Set([1, 2, 3])); // false
isNumber(new Set(['a', 'b', 'c'])); // false

// Strings
isNumber(''); // false
isNumber('a longer string'); // false
isNumber('1000n'); // false
isNumber('3e8'); // false
isNumber('42'); // false
isNumber('3.14'); // false
isNumber('0'); // false
isNumber('-0'); // false
isNumber('-3.14'); // false
isNumber('-42'); // false
isNumber('-3e8'); // false
isNumber('-1000n'); // false

// Symbols
isNumber(Symbol()); // false
isNumber(Symbol('name')); // false

// This
isNumber(this); // false
isNumber(globalThis); // false

// TypedArrays
isNumber(new Int8Array(2)); // false
isNumber(new Int16Array(2)); // false
isNumber(new Int32Array(2)); // false
isNumber(new Uint8Array(2)); // false
isNumber(new Uint16Array(2)); // false
isNumber(new Uint32Array(2)); // false
isNumber(new Uint8ClampedArray(2)); // false

isNumber(new BigInt64Array(2)); // false
isNumber(new BigUint64Array(2)); // false

isNumber(new Float32Array(2)); // false
isNumber(new Float64Array(2)); // false

isNumber(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isNumber(new WeakMap()); // false
isNumber(new WeakSet()); // false
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
npm i @zerodep/is-number
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.number` package to `@zerodep/is-number` for consistency across @zerodep ecosystem
