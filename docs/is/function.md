# isFunction()

[![version](https://img.shields.io/npm/v/@zerodep/is-function?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-function)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a function.

## Signature

```typescript
declare const isFunction: (value: unknown) => boolean;
```

### Function Parameters

The `isFunction` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isFunction } from '@zerodep/app';

// CJS
const { isFunction } = require('@zerodep/app');
```

```javascript
// Arrays
isFunction([]); // false
isFunction([1, 2, 3]); // false
isFunction(['a', 'b', 'c']); // false

// BigInts
isFunction(42n); // false
isFunction(0n); // false
isFunction(-0n); // false
isFunction(-42n); // false

// Booleans
isFunction(true); // false
isFunction(false); // false

// Class
isFunction(
  class SomeClass {
    constructor() {}
  }
); // true  <-- classes are functions

// Dates
isFunction(new Date()); // false
isFunction(new Date('1970-01-01T12:00:00.000Z')); // false
isFunction(new Date('2099-12-31')); // false

// Empty
isFunction(null); // false
isFunction(undefined); // false

// Errors
isFunction(new Error('message')); // false
isFunction(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isFunction(3.14); // false
isFunction(0.0); // false
isFunction(-0.0); // false
isFunction(-3.14); // false
isFunction(Math.E); // false
isFunction(Math.PI); // false
isFunction(Number.MIN_VALUE); // false

// Functions
isFunction(() => 'function'); // true
isFunction(async () => 'function'); // true

// Generators
isFunction(function* () {
  yield 'a';
}); // false
isFunction(async function* () {
  yield 'a';
}); // false

// Maps
isFunction(new Map()); // false
isFunction(new Map([['key1', 123]])); // false
isFunction(new Map([['key1', 'value1']])); // false

// Numbers
isFunction(Number.POSITIVE_INFINITY); // false
isFunction(Number.MAX_SAFE_INTEGER); // false
isFunction(3e8); // false
isFunction(42); // false
isFunction(1); // false
isFunction(0); // false
isFunction(-0); // false
isFunction(-1); // false
isFunction(-42); // false
isFunction(-3e8); // false
isFunction(Number.MIN_SAFE_INTEGER); // false
isFunction(Number.NEGATIVE_INFINITY); // false
isFunction(Number.NaN); // false

// POJOs
isFunction({}); // false
isFunction({ key: 'string' }); // false
isFunction({ key: 123 }); // false

// Promise
isFunction(new Promise(() => {})); // false
isFunction(new Promise.all([])); // false
isFunction(new Promise.allSettled([])); // false
isFunction(new Promise.race([])); // false
isFunction(Promise.resolve()); // false

// Regular Expression
isFunction(/[regex]+/gi); // false
isFunction(new RegExp('d', 'gi')); // false

// Sets
isFunction(new Set()); // false
isFunction(new Set([1, 2, 3])); // false
isFunction(new Set(['a', 'b', 'c'])); // false

// Strings
isFunction(''); // false
isFunction('a longer string'); // false
isFunction('1000n'); // false
isFunction('3e8'); // false
isFunction('42'); // false
isFunction('3.14'); // false
isFunction('0'); // false
isFunction('-0'); // false
isFunction('-3.14'); // false
isFunction('-42'); // false
isFunction('-3e8'); // false
isFunction('-1000n'); // false

// Symbols
isFunction(Symbol()); // false
isFunction(Symbol('name')); // false

// This
isFunction(this); // false
isFunction(globalThis); // false

// TypedArrays
isFunction(new Int8Array(2)); // false
isFunction(new Int16Array(2)); // false
isFunction(new Int32Array(2)); // false
isFunction(new Uint8Array(2)); // false
isFunction(new Uint16Array(2)); // false
isFunction(new Uint32Array(2)); // false
isFunction(new Uint8ClampedArray(2)); // false

isFunction(new BigInt64Array(2)); // false
isFunction(new BigUint64Array(2)); // false

isFunction(new Float32Array(2)); // false
isFunction(new Float64Array(2)); // false

isFunction(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isFunction(new WeakMap()); // false
isFunction(new WeakSet()); // false
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

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.function` package to `@zerodep/is-function` for consistency across @zerodep ecosystem
