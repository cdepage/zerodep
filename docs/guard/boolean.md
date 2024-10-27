# guardBoolean()

[![version](https://img.shields.io/npm/v/@zerodep/guard-boolean?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-boolean)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be a boolean; it will throw a `ZeroDepError` if the guard fails.

## Basic Signature

```typescript
declare const guardBoolean: (value: unknown) => void;
```

The `guardBoolean` function has the following parameters:

- **value** - the value to guard

## Examples

```javascript
// ESM
import { guardBoolean } from '@zerodep/app';

// CJS
const { guardBoolean } = require('@zerodep/app');
```

```javascript
// Arrays
guardBoolean([]); // throws ZeroDepError: Value is not a boolean
guardBoolean([1, 2, 3]); // throws ZeroDepError: Value is not a boolean
guardBoolean(['a', 'b', 'c']); // throws ZeroDepError: Value is not a boolean

// BigInts
guardBoolean(42n); // throws ZeroDepError: Value is not a boolean
guardBoolean(0n); // throws ZeroDepError: Value is not a boolean
guardBoolean(-0n); // throws ZeroDepError: Value is not a boolean
guardBoolean(-42n); // throws ZeroDepError: Value is not a boolean

// Booleans
guardBoolean(true); // void
guardBoolean(false); // void

// Class
guardBoolean(
  class SomeClass {
    constructor() {}
  }
); // throws ZeroDepError: Value is not a boolean

// Dates
guardBoolean(new Date()); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Date('1970-01-01T12:00:00.000Z')); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Date('2099-12-31')); // throws ZeroDepError: Value is not a boolean

// Empty
guardBoolean(null); // throws ZeroDepError: Value is not a boolean
guardBoolean(undefined); // throws ZeroDepError: Value is not a boolean

// Errors
guardBoolean(new Error('message')); // throws ZeroDepError: Value is not a boolean
guardBoolean(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // throws ZeroDepError: Value is not a boolean

// Floats
guardBoolean(3.14); // throws ZeroDepError: Value is not a boolean
guardBoolean(0.0); // throws ZeroDepError: Value is not a boolean
guardBoolean(-0.0); // throws ZeroDepError: Value is not a boolean
guardBoolean(-3.14); // throws ZeroDepError: Value is not a boolean
guardBoolean(Math.E); // throws ZeroDepError: Value is not a boolean
guardBoolean(Math.PI); // throws ZeroDepError: Value is not a boolean
guardBoolean(Number.MIN_VALUE); // throws ZeroDepError: Value is not a boolean

// Functions
guardBoolean(() => 'function'); // throws ZeroDepError: Value is not a boolean
guardBoolean(async () => 'function'); // throws ZeroDepError: Value is not a boolean

// Generators
guardBoolean(function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not a boolean
guardBoolean(async function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not a boolean

// Maps
guardBoolean(new Map()); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Map([['key1', 123]])); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Map([['key1', 'value1']])); // throws ZeroDepError: Value is not a boolean

// Numbers
guardBoolean(Number.POSITIVE_INFINITY); // throws ZeroDepError: Value is not a boolean
guardBoolean(Number.MAX_SAFE_INTEGER); // throws ZeroDepError: Value is not a boolean
guardBoolean(Number.MAX_VALUE); // throws ZeroDepError: Value is not a boolean
guardBoolean(3e8); // throws ZeroDepError: Value is not a boolean
guardBoolean(42); // throws ZeroDepError: Value is not a boolean
guardBoolean(1); // throws ZeroDepError: Value is not a boolean
guardBoolean(0); // throws ZeroDepError: Value is not a boolean
guardBoolean(-0); // throws ZeroDepError: Value is not a boolean
guardBoolean(-1); // throws ZeroDepError: Value is not a boolean
guardBoolean(-42); // throws ZeroDepError: Value is not a boolean
guardBoolean(-3e8); // throws ZeroDepError: Value is not a boolean
guardBoolean(Number.MIN_SAFE_INTEGER); // throws ZeroDepError: Value is not a boolean
guardBoolean(Number.NEGATIVE_INFINITY); // throws ZeroDepError: Value is not a boolean
guardBoolean(Number.NaN); // throws ZeroDepError: Value is not a boolean

// POJOs
guardBoolean({}); // throws ZeroDepError: Value is not a boolean
guardBoolean({ key: 'string' }); // throws ZeroDepError: Value is not a boolean
guardBoolean({ key: 123 }); // throws ZeroDepError: Value is not a boolean

// Promise
guardBoolean(new Promise(() => {})); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Promise.all([])); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Promise.allSettled([])); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Promise.race([])); // throws ZeroDepError: Value is not a boolean
guardBoolean(Promise.resolve()); // throws ZeroDepError: Value is not a boolean

// Regular Expression
guardBoolean(/[regex]+/gi); // throws ZeroDepError: Value is not a boolean
guardBoolean(new RegExp('d', 'gi')); // throws ZeroDepError: Value is not a boolean

// Sets
guardBoolean(new Set()); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Set(['a', 'b', 'c'])); // throws ZeroDepError: Value is not a boolean

// Strings
guardBoolean(''); // throws ZeroDepError: Value is not a boolean
guardBoolean('a longer string'); // throws ZeroDepError: Value is not a boolean
guardBoolean('1000n'); // throws ZeroDepError: Value is not a boolean
guardBoolean('3e8'); // throws ZeroDepError: Value is not a boolean
guardBoolean('42'); // throws ZeroDepError: Value is not a boolean
guardBoolean('3.14'); // throws ZeroDepError: Value is not a boolean
guardBoolean('0'); // throws ZeroDepError: Value is not a boolean
guardBoolean('-0'); // throws ZeroDepError: Value is not a boolean
guardBoolean('-3.14'); // throws ZeroDepError: Value is not a boolean
guardBoolean('-42'); // throws ZeroDepError: Value is not a boolean
guardBoolean('-3e8'); // throws ZeroDepError: Value is not a boolean
guardBoolean('-1000n'); // throws ZeroDepError: Value is not a boolean

// Symbols
guardBoolean(Symbol()); // throws ZeroDepError: Value is not a boolean
guardBoolean(Symbol('name')); // throws ZeroDepError: Value is not a boolean

// This
guardBoolean(this); // throws ZeroDepError: Value is not a boolean
guardBoolean(globalThis); // throws ZeroDepError: Value is not a boolean

// TypedArrays
guardBoolean(new Int8Array(2)); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Int16Array(2)); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Int32Array(2)); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Uint8Array(2)); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Uint16Array(2)); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Uint32Array(2)); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Uint8ClampedArray(2)); // throws ZeroDepError: Value is not a boolean

guardBoolean(new BigInt64Array(2)); // throws ZeroDepError: Value is not a boolean
guardBoolean(new BigUint64Array(2)); // throws ZeroDepError: Value is not a boolean

guardBoolean(new Float32Array(2)); // throws ZeroDepError: Value is not a boolean
guardBoolean(new Float64Array(2)); // throws ZeroDepError: Value is not a boolean

guardBoolean(new SharedArrayBuffer(512)); // throws ZeroDepError: Value is not a boolean

// WeakMap and WeakSet
guardBoolean(new WeakMap()); // throws ZeroDepError: Value is not a boolean
guardBoolean(new WeakSet()); // throws ZeroDepError: Value is not a boolean
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
npm i @zerodep/guard-boolean
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/guard.boolean` package to `@zerodep/guard-boolean` for consistency across @zerodep ecosystem
