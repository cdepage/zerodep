# isIterable

[![version](https://img.shields.io/npm/v/@zerodep/is-iterable?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-iterable)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is iterable.

## Signature

```typescript
declare const isIterable: (value: unknown) => boolean;
```

### Function Parameters

The `isIterable` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isIterable } from '@zerodep/app';

// CJS
const { isIterable } = require('@zerodep/app');
```

```javascript
// Arrays
isIterable([]); // true
isIterable([1, 2, 3]); // true
isIterable(['a', 'b', 'c']); // true

// BigInts
isIterable(42n); // false
isIterable(0n); // false
isIterable(-0n); // false
isIterable(-42n); // false

// Booleans
isIterable(true); // false
isIterable(false); // false

// Class
isIterable(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isIterable(new Date()); // false
isIterable(new Date('1970-01-01T12:00:00.000Z')); // false
isIterable(new Date('2099-12-31')); // false

// Empty
isIterable(null); // false
isIterable(undefined); // false

// Errors
isIterable(new Error('message')); // false
isIterable(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isIterable(3.14); // false
isIterable(0.0); // false
isIterable(-0.0); // false
isIterable(-3.14); // false
isIterable(Math.E); // false
isIterable(Math.PI); // false
isIterable(Number.MIN_VALUE); // false

// Functions
isIterable(() => 'function'); // false
isIterable(async () => 'function'); // false

// Generators
isIterable(function* () {
  yield 'a';
}); // true
isIterable(async function* () {
  yield 'a';
}); // true

// Maps
isIterable(new Map()); // true
isIterable(new Map([['key1', 123]])); // true
isIterable(new Map([['key1', 'value1']])); // true

// Numbers
isIterable(Number.POSITIVE_INFINITY); // false
isIterable(Number.MAX_SAFE_INTEGER); // false
isIterable(3e8); // false
isIterable(42); // false
isIterable(1); // false
isIterable(0); // false
isIterable(-0); // false
isIterable(-1); // false
isIterable(-42); // false
isIterable(-3e8); // false
isIterable(Number.MIN_SAFE_INTEGER); // false
isIterable(Number.NEGATIVE_INFINITY); // false
isIterable(Number.NaN); // false

// POJOs
isIterable({}); // false
isIterable({ key: 'string' }); // false
isIterable({ key: 123 }); // false

// Promise
isIterable(new Promise(() => {})); // false
isIterable(new Promise.all([])); // false
isIterable(new Promise.allSettled([])); // false
isIterable(new Promise.race([])); // false
isIterable(Promise.resolve()); // false

// Regular Expression
isIterable(/[regex]+/gi); // false
isIterable(new RegExp('d', 'gi')); // false

// Sets
isIterable(new Set()); // true
isIterable(new Set([1, 2, 3])); // true
isIterable(new Set(['a', 'b', 'c'])); // true

// Strings
isIterable(''); // false
isIterable('a longer string'); // false
isIterable('1000n'); // false
isIterable('3e8'); // false
isIterable('42'); // false
isIterable('3.14'); // false
isIterable('0'); // false
isIterable('-0'); // false
isIterable('-3.14'); // false
isIterable('-42'); // false
isIterable('-3e8'); // false
isIterable('-1000n'); // false

// Symbols
isIterable(Symbol()); // false
isIterable(Symbol('name')); // false

// This
isIterable(this); // false
isIterable(globalThis); // false

// TypedArrays
isIterable(new Int8Array(2)); // true
isIterable(new Int16Array(2)); // true
isIterable(new Int32Array(2)); // true
isIterable(new Uint8Array(2)); // true
isIterable(new Uint16Array(2)); // true
isIterable(new Uint32Array(2)); // true
isIterable(new Uint8ClampedArray(2)); // true

isIterable(new BigInt64Array(2)); // true
isIterable(new BigUint64Array(2)); // true

isIterable(new Float32Array(2)); // true
isIterable(new Float64Array(2)); // true

isIterable(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isIterable(new WeakMap()); // false
isIterable(new WeakSet()); // false
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
npm i @zerodep/is-iterable
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.iterable` package to `@zerodep/is-iterable` for consistency across @zerodep ecosystem
