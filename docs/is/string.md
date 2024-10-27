# isString()

[![version](https://img.shields.io/npm/v/@zerodep/is-string?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-string)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a string.

## Signature

```typescript
declare const isString: (value: unknown) => boolean;
```

### Function Parameters

The `isString` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isString } from '@zerodep/app';

// CJS
const { isString } = require('@zerodep/app');
```

```javascript
// Arrays
isString([]); // false
isString([1, 2, 3]); // false
isString(['a', 'b', 'c']); // false

// BigInts
isString(42n); // false
isString(0n); // false
isString(-0n); // false
isString(-42n); // false

// Booleans
isString(true); // false
isString(false); // false

// Class
isString(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isString(new Date()); // false
isString(new Date('1970-01-01T12:00:00.000Z')); // false
isString(new Date('2099-12-31')); // false

// Empty
isString(null); // false
isString(undefined); // false

// Errors
isString(new Error('message')); // false
isString(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isString(3.14); // false
isString(0.0); // false
isString(-0.0); // false
isString(-3.14); // false
isString(Math.E); // false
isString(Math.PI); // false
isString(Number.MIN_VALUE); // false

// Functions
isString(() => 'function'); // false
isString(async () => 'function'); // false

// Generators
isString(function* () {
  yield 'a';
}); // false
isString(async function* () {
  yield 'a';
}); // false

// Maps
isString(new Map()); // false
isString(new Map([['key1', 123]])); // false
isString(new Map([['key1', 'value1']])); // false

// Numbers
isString(Number.POSITIVE_INFINITY); // false
isString(Number.MAX_SAFE_INTEGER); // false
isString(3e8); // false
isString(42); // false
isString(1); // false
isString(0); // false
isString(-0); // false
isString(-1); // false
isString(-42); // false
isString(-3e8); // false
isString(Number.MIN_SAFE_INTEGER); // false
isString(Number.NEGATIVE_INFINITY); // false
isString(Number.NaN); // false

// POJOs
isString({}); // false
isString({ key: 'string' }); // false
isString({ key: 123 }); // false

// Promise
isString(new Promise(() => {})); // false
isString(new Promise.all([])); // false
isString(new Promise.allSettled([])); // false
isString(new Promise.race([])); // false
isString(Promise.resolve()); // false

// Regular Expression
isString(/[regex]+/gi); // false
isString(new RegExp('d', 'gi')); // false

// Sets
isString(new Set()); // false
isString(new Set([1, 2, 3])); // false
isString(new Set(['a', 'b', 'c'])); // false

// Strings
isString(''); // true
isString('a longer string'); // true
isString('1000n'); // true
isString('3e8'); // true
isString('42'); // true
isString('3.14'); // true
isString('0'); // true
isString('-0'); // true
isString('-3.14'); // true
isString('-42'); // true
isString('-3e8'); // true
isString('-1000n'); // true

// Symbols
isString(Symbol()); // false
isString(Symbol('name')); // false

// This
isString(this); // false
isString(globalThis); // false

// TypedArrays
isString(new Int8Array(2)); // false
isString(new Int16Array(2)); // false
isString(new Int32Array(2)); // false
isString(new Uint8Array(2)); // false
isString(new Uint16Array(2)); // false
isString(new Uint32Array(2)); // false
isString(new Uint8ClampedArray(2)); // false

isString(new BigInt64Array(2)); // false
isString(new BigUint64Array(2)); // false

isString(new Float32Array(2)); // false
isString(new Float64Array(2)); // false

isString(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isString(new WeakMap()); // false
isString(new WeakSet()); // false
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
npm i @zerodep/is-string
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.string` package to `@zerodep/is-string` for consistency across @zerodep ecosystem
