# isBoolean()

[![version](https://img.shields.io/npm/v/@zerodep/is-boolean?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-boolean)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a boolean.

## Signature

```typescript
declare const isBoolean: (value: unknown) => boolean;
```

### Function Parameters

The `isBoolean` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isBoolean } from '@zerodep/app';

// CJS
const { isBoolean } = require('@zerodep/app');
```

```javascript
// Arrays
isBoolean([]); // false
isBoolean([1, 2, 3]); // false
isBoolean(['a', 'b', 'c']); // false

// BigInts
isBoolean(42n); // false
isBoolean(0n); // false
isBoolean(-0n); // false
isBoolean(-42n); // false

// Booleans
isBoolean(true); // true
isBoolean(false); // true

// Class
isBoolean(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isBoolean(new Date()); // false
isBoolean(new Date('1970-01-01T12:00:00.000Z')); // true
isBoolean(new Date('2099-12-31')); // true

// Empty
isBoolean(null); // false
isBoolean(undefined); // false

// Errors
isBoolean(new Error('message')); // false
isBoolean(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isBoolean(3.14); // false
isBoolean(0.0); // false
isBoolean(-0.0); // false
isBoolean(-3.14); // false
isBoolean(Math.E); // false
isBoolean(Math.PI); // false
isBoolean(Number.MIN_VALUE); // false

// Functions
isBoolean(() => 'function'); // false
isBoolean(async () => 'function'); // false

// Generators
isBoolean(function* () {
  yield 'a';
}); // false
isBoolean(async function* () {
  yield 'a';
}); // false

// Maps
isBoolean(new Map()); // false
isBoolean(new Map([['key1', 123]])); // false
isBoolean(new Map([['key1', 'value1']])); // false

// Numbers
isBoolean(Number.POSITIVE_INFINITY); // false
isBoolean(Number.MAX_SAFE_INTEGER); // false
isBoolean(Number.MAX_VALUE); // false
isBoolean(3e8); // false
isBoolean(42); // false
isBoolean(1); // false
isBoolean(0); // false
isBoolean(-0); // false
isBoolean(-1); // false
isBoolean(-42); // false
isBoolean(-3e8); // false
isBoolean(Number.MIN_SAFE_INTEGER); // false
isBoolean(Number.NEGATIVE_INFINITY); // false
isBoolean(Number.NaN); // false

// POJOs
isBoolean({}); // false
isBoolean({ key: 'string' }); // false
isBoolean({ key: 123 }); // false

// Promise
isBoolean(new Promise(() => {})); // false
isBoolean(new Promise.all([])); // false
isBoolean(new Promise.allSettled([])); // false
isBoolean(new Promise.race([])); // false
isBoolean(Promise.resolve()); // false

// Regular Expression
isBoolean(/[regex]+/gi); // false
isBoolean(new RegExp('d', 'gi')); // false

// Sets
isBoolean(new Set()); // false
isBoolean(new Set([1, 2, 3])); // false
isBoolean(new Set(['a', 'b', 'c'])); // false

// Strings
isBoolean(''); // false
isBoolean('a longer string'); // false
isBoolean('1000n'); // false
isBoolean('3e8'); // false
isBoolean('42'); // false
isBoolean('3.14'); // false
isBoolean('0'); // false
isBoolean('-0'); // false
isBoolean('-3.14'); // false
isBoolean('-42'); // false
isBoolean('-3e8'); // false
isBoolean('-1000n'); // false

// Symbols
isBoolean(Symbol()); // false
isBoolean(Symbol('name')); // false

// This
isBoolean(this); // false
isBoolean(globalThis); // false

// TypedArrays
isBoolean(new Int8Array(2)); // false
isBoolean(new Int16Array(2)); // false
isBoolean(new Int32Array(2)); // false
isBoolean(new Uint8Array(2)); // false
isBoolean(new Uint16Array(2)); // false
isBoolean(new Uint32Array(2)); // false
isBoolean(new Uint8ClampedArray(2)); // false

isBoolean(new BigInt64Array(2)); // false
isBoolean(new BigUint64Array(2)); // false

isBoolean(new Float32Array(2)); // false
isBoolean(new Float64Array(2)); // false

isBoolean(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isBoolean(new WeakMap()); // false
isBoolean(new WeakSet()); // false
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
npm i @zerodep/is-boolean
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.boolean` package to `@zerodep/is-boolean` for consistency across @zerodep ecosystem
