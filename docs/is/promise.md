# isPromise()

[![version](https://img.shields.io/npm/v/@zerodep/is-promise?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-promise)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a pending, resolved or rejected Promise.

## Signature

```typescript
declare const isPromise: (value: unknown) => boolean;
```

### Function Parameters

The `isPromise` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isPromise } from '@zerodep/app';

// CJS
const { isPromise } = require('@zerodep/app');
```

```javascript
// Arrays
isPromise([]); // false
isPromise([1, 2, 3]); // false
isPromise(['a', 'b', 'c']); // false

// BigInts
isPromise(42n); // false
isPromise(0n); // false
isPromise(-0n); // false
isPromise(-42n); // false

// Booleans
isPromise(true); // false
isPromise(false); // false

// Class
isPromise(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isPromise(new Date()); // false
isPromise(new Date('1970-01-01T12:00:00.000Z')); // false
isPromise(new Date('2099-12-31')); // false

// Empty
isPromise(null); // false
isPromise(undefined); // false

// Errors
isPromise(new Error('message')); // false
isPromise(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isPromise(3.14); // false
isPromise(0.0); // false
isPromise(-0.0); // false
isPromise(-3.14); // false
isPromise(Math.E); // false
isPromise(Math.PI); // false
isPromise(Number.MIN_VALUE); // false

// Functions
isPromise(() => 'function'); // false
isPromise(async () => 'function'); // false

// Generators
isPromise(function* () {
  yield 'a';
}); // false
isPromise(async function* () {
  yield 'a';
}); // false

// Maps
isPromise(new Map()); // false
isPromise(new Map([['key1', 123]])); // false
isPromise(new Map([['key1', 'value1']])); // false

// Numbers
isPromise(Number.POSITIVE_INFINITY); // false
isPromise(Number.MAX_SAFE_INTEGER); // false
isPromise(3e8); // false
isPromise(42); // false
isPromise(1); // false
isPromise(0); // false
isPromise(-0); // false
isPromise(-1); // false
isPromise(-42); // false
isPromise(-3e8); // false
isPromise(Number.MIN_SAFE_INTEGER); // false
isPromise(Number.NEGATIVE_INFINITY); // false
isPromise(Number.NaN); // false

// POJOs
isPromise({}); // false
isPromise({ key: 'string' }); // false
isPromise({ key: 123 }); // false

// Promise
isPromise(new Promise(() => {})); // true
isPromise(new Promise.all([])); // true
isPromise(new Promise.allSettled([])); // true
isPromise(new Promise.race([])); // true
isPromise(Promise.resolve()); // true

// Regular Expression
isPromise(/[regex]+/gi); // false
isPromise(new RegExp('d', 'gi')); // false

// Sets
isPromise(new Set()); // false
isPromise(new Set([1, 2, 3])); // false
isPromise(new Set(['a', 'b', 'c'])); // false

// Strings
isPromise(''); // false
isPromise('a longer string'); // false
isPromise('1000n'); // false
isPromise('3e8'); // false
isPromise('42'); // false
isPromise('3.14'); // false
isPromise('0'); // false
isPromise('-0'); // false
isPromise('-3.14'); // false
isPromise('-42'); // false
isPromise('-3e8'); // false
isPromise('-1000n'); // false

// Symbols
isPromise(Symbol()); // false
isPromise(Symbol('name')); // false

// This
isPromise(this); // false
isPromise(globalThis); // false

// TypedArrays
isPromise(new Int8Array(2)); // false
isPromise(new Int16Array(2)); // false
isPromise(new Int32Array(2)); // false
isPromise(new Uint8Array(2)); // false
isPromise(new Uint16Array(2)); // false
isPromise(new Uint32Array(2)); // false
isPromise(new Uint8ClampedArray(2)); // false

isPromise(new BigInt64Array(2)); // false
isPromise(new BigUint64Array(2)); // false

isPromise(new Float32Array(2)); // false
isPromise(new Float64Array(2)); // false

isPromise(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isPromise(new WeakMap()); // false
isPromise(new WeakSet()); // false
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
npm i @zerodep/is-promise
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.promise` package to `@zerodep/is-promise` for consistency across @zerodep ecosystem
