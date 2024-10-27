# guardFunction()

[![version](https://img.shields.io/npm/v/@zerodep/guard-function?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-function)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be a function; it will throw a `ZeroDepError` if the guard fails.

## Signature

```typescript
declare const guardFunction: (value: unknown) => void;
```

The `guardFunction` function has the following parameters:

- **value** - the value to guard

## Examples

```javascript
// ESM
import { guardFunction } from '@zerodep/app';

// CJS
const { guardFunction } = require('@zerodep/app');
```

```javascript
// Arrays
guardFunction([]); // throws ZeroDepError: Value is not a function
guardFunction([1, 2, 3]); // throws ZeroDepError: Value is not a function
guardFunction(['a', 'b', 'c']); // throws ZeroDepError: Value is not a function

// BigInts
guardFunction(42n); // throws ZeroDepError: Value is not a function
guardFunction(0n); // throws ZeroDepError: Value is not a function
guardFunction(-0n); // throws ZeroDepError: Value is not a function
guardFunction(-42n); // throws ZeroDepError: Value is not a function

// Booleans
guardFunction(true); // throws ZeroDepError: Value is not a function
guardFunction(false); // throws ZeroDepError: Value is not a function

// Class
guardFunction(
  class SomeClass {
    constructor() {}
  }
); // throws ZeroDepError: Value is not a function

// Dates
guardFunction(new Date()); // throws ZeroDepError: Value is not a function
guardFunction(new Date('1970-01-01T12:00:00.000Z')); // throws ZeroDepError: Value is not a function
guardFunction(new Date('2099-12-31')); // throws ZeroDepError: Value is not a function

// Empty
guardFunction(null); // throws ZeroDepError: Value is not a function
guardFunction(undefined); // throws ZeroDepError: Value is not a function

// Errors
guardFunction(new Error('message')); // throws ZeroDepError: Value is not a function
guardFunction(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // throws ZeroDepError: Value is not a function

// Floats
guardFunction(3.14); // throws ZeroDepError: Value is not a function
guardFunction(0.0); // throws ZeroDepError: Value is not a function
guardFunction(-0.0); // throws ZeroDepError: Value is not a function
guardFunction(-3.14); // throws ZeroDepError: Value is not a function
guardFunction(Math.E); // throws ZeroDepError: Value is not a function
guardFunction(Math.PI); // throws ZeroDepError: Value is not a function
guardFunction(Number.MIN_VALUE); // throws ZeroDepError: Value is not a function

// Functions
guardFunction(() => 'function'); // void
guardFunction(async () => 'function'); // void

// Generators
guardFunction(function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not a function
guardFunction(async function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not a function

// Maps
guardFunction(new Map()); // throws ZeroDepError: Value is not a function
guardFunction(new Map([['key1', 123]])); // throws ZeroDepError: Value is not a function
guardFunction(new Map([['key1', 'value1']])); // throws ZeroDepError: Value is not a function

// Numbers
guardFunction(Number.POSITIVE_INFINITY); // throws ZeroDepError: Value is not a function
guardFunction(Number.MAX_SAFE_INTEGER); // throws ZeroDepError: Value is not a function
guardFunction(Number.MAX_VALUE); // throws ZeroDepError: Value is not a function
guardFunction(3e8); // throws ZeroDepError: Value is not a function
guardFunction(42); // throws ZeroDepError: Value is not a function
guardFunction(1); // throws ZeroDepError: Value is not a function
guardFunction(0); // throws ZeroDepError: Value is not a function
guardFunction(-0); // throws ZeroDepError: Value is not a function
guardFunction(-1); // throws ZeroDepError: Value is not a function
guardFunction(-42); // throws ZeroDepError: Value is not a function
guardFunction(-3e8); // throws ZeroDepError: Value is not a function
guardFunction(Number.MIN_SAFE_INTEGER); // throws ZeroDepError: Value is not a function
guardFunction(Number.NEGATIVE_INFINITY); // throws ZeroDepError: Value is not a function
guardFunction(Number.NaN); // throws ZeroDepError: Value is not a function

// POJOs
guardFunction({}); // throws ZeroDepError: Value is not a function
guardFunction({ key: 'string' }); // throws ZeroDepError: Value is not a function
guardFunction({ key: 123 }); // throws ZeroDepError: Value is not a function

// Promise
guardFunction(new Promise(() => {})); // throws ZeroDepError: Value is not a function
guardFunction(new Promise.all([])); // throws ZeroDepError: Value is not a function
guardFunction(new Promise.allSettled([])); // throws ZeroDepError: Value is not a function
guardFunction(new Promise.race([])); // throws ZeroDepError: Value is not a function
guardFunction(Promise.resolve()); // throws ZeroDepError: Value is not a function

// Regular Expression
guardFunction(/[regex]+/gi); // throws ZeroDepError: Value is not a function
guardFunction(new RegExp('d', 'gi')); // throws ZeroDepError: Value is not a function

// Sets
guardFunction(new Set()); // throws ZeroDepError: Value is not a function
guardFunction(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a function
guardFunction(new Set(['a', 'b', 'c'])); // throws ZeroDepError: Value is not a function

// Strings
guardFunction(''); // throws ZeroDepError: Value is not a function
guardFunction('a longer string'); // throws ZeroDepError: Value is not a function
guardFunction('1000n'); // throws ZeroDepError: Value is not a function
guardFunction('3e8'); // throws ZeroDepError: Value is not a function
guardFunction('42'); // throws ZeroDepError: Value is not a function
guardFunction('3.14'); // throws ZeroDepError: Value is not a function
guardFunction('0'); // throws ZeroDepError: Value is not a function
guardFunction('-0'); // throws ZeroDepError: Value is not a function
guardFunction('-3.14'); // throws ZeroDepError: Value is not a function
guardFunction('-42'); // throws ZeroDepError: Value is not a function
guardFunction('-3e8'); // throws ZeroDepError: Value is not a function
guardFunction('-1000n'); // throws ZeroDepError: Value is not a function

// Symbols
guardFunction(Symbol()); // throws ZeroDepError: Value is not a function
guardFunction(Symbol('name')); // throws ZeroDepError: Value is not a function

// This
guardFunction(this); // throws ZeroDepError: Value is not a function
guardFunction(globalThis); // throws ZeroDepError: Value is not a function

// TypedArrays
guardFunction(new Int8Array(2)); // throws ZeroDepError: Value is not a function
guardFunction(new Int16Array(2)); // throws ZeroDepError: Value is not a function
guardFunction(new Int32Array(2)); // throws ZeroDepError: Value is not a function
guardFunction(new Uint8Array(2)); // throws ZeroDepError: Value is not a function
guardFunction(new Uint16Array(2)); // throws ZeroDepError: Value is not a function
guardFunction(new Uint32Array(2)); // throws ZeroDepError: Value is not a function
guardFunction(new Uint8ClampedArray(2)); // throws ZeroDepError: Value is not a function

guardFunction(new BigInt64Array(2)); // throws ZeroDepError: Value is not a function
guardFunction(new BigUint64Array(2)); // throws ZeroDepError: Value is not a function

guardFunction(new Float32Array(2)); // throws ZeroDepError: Value is not a function
guardFunction(new Float64Array(2)); // throws ZeroDepError: Value is not a function

guardFunction(new SharedArrayBuffer(512)); // throws ZeroDepError: Value is not a function

// WeakMap and WeakSet
guardFunction(new WeakMap()); // throws ZeroDepError: Value is not a function
guardFunction(new WeakSet()); // throws ZeroDepError: Value is not a function
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "guard" functions
npm i @zerodep/guards

# only this @zerodep package
npm i @zerodep/guard-function
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/guard.function` package to `@zerodep/guard-function` for consistency across @zerodep ecosystem
