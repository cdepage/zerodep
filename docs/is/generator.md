# isGenerator()

[![version](https://img.shields.io/npm/v/@zerodep/is-function?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-function)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a generator.

## Signature

```typescript
declare const isGenerator: (value: unknown) => boolean;
```

### Function Parameters

The `isGenerator` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isGenerator } from '@zerodep/app';

// CJS
const { isGenerator } = require('@zerodep/app');
```

```javascript
// Arrays
isGenerator([]); // false
isGenerator([1, 2, 3]); // false
isGenerator(['a', 'b', 'c']); // false

// BigInts
isGenerator(42n); // false
isGenerator(0n); // false
isGenerator(-0n); // false
isGenerator(-42n); // false

// Booleans
isGenerator(true); // false
isGenerator(false); // false

// Class
isGenerator(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isGenerator(new Date()); // false
isGenerator(new Date('1970-01-01T12:00:00.000Z')); // false
isGenerator(new Date('2099-12-31')); // false

// Empty
isGenerator(null); // false
isGenerator(undefined); // false

// Errors
isGenerator(new Error('message')); // false
isGenerator(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isGenerator(3.14); // false
isGenerator(0.0); // false
isGenerator(-0.0); // false
isGenerator(-3.14); // false
isGenerator(Math.E); // false
isGenerator(Math.PI); // false
isGenerator(Number.MIN_VALUE); // false

// Functions
isGenerator(() => 'function'); // false
isGenerator(async () => 'function'); // false

// Generators
isGenerator(function* () {
  yield 'a';
}); // true
isGenerator(async function* () {
  yield 'a';
}); // true

// Maps
isGenerator(new Map()); // false
isGenerator(new Map([['key1', 123]])); // false
isGenerator(new Map([['key1', 'value1']])); // false

// Numbers
isGenerator(Number.POSITIVE_INFINITY); // false
isGenerator(Number.MAX_SAFE_INTEGER); // false
isGenerator(3e8); // false
isGenerator(42); // false
isGenerator(1); // false
isGenerator(0); // false
isGenerator(-0); // false
isGenerator(-1); // false
isGenerator(-42); // false
isGenerator(-3e8); // false
isGenerator(Number.MIN_SAFE_INTEGER); // false
isGenerator(Number.NEGATIVE_INFINITY); // false
isGenerator(Number.NaN); // false

// POJOs
isGenerator({}); // false
isGenerator({ key: 'string' }); // false
isGenerator({ key: 123 }); // false

// Promise
isGenerator(new Promise(() => {})); // false
isGenerator(new Promise.all([])); // false
isGenerator(new Promise.allSettled([])); // false
isGenerator(new Promise.race([])); // false
isGenerator(Promise.resolve()); // false

// Regular Expression
isGenerator(/[regex]+/gi); // false
isGenerator(new RegExp('d', 'gi')); // false

// Sets
isGenerator(new Set()); // false
isGenerator(new Set([1, 2, 3])); // false
isGenerator(new Set(['a', 'b', 'c'])); // false

// Strings
isGenerator(''); // false
isGenerator('a longer string'); // false
isGenerator('1000n'); // false
isGenerator('3e8'); // false
isGenerator('42'); // false
isGenerator('3.14'); // false
isGenerator('0'); // false
isGenerator('-0'); // false
isGenerator('-3.14'); // false
isGenerator('-42'); // false
isGenerator('-3e8'); // false
isGenerator('-1000n'); // false

// Symbols
isGenerator(Symbol()); // false
isGenerator(Symbol('name')); // false

// This
isGenerator(this); // false
isGenerator(globalThis); // false

// TypedArrays
isGenerator(new Int8Array(2)); // false
isGenerator(new Int16Array(2)); // false
isGenerator(new Int32Array(2)); // false
isGenerator(new Uint8Array(2)); // false
isGenerator(new Uint16Array(2)); // false
isGenerator(new Uint32Array(2)); // false
isGenerator(new Uint8ClampedArray(2)); // false

isGenerator(new BigInt64Array(2)); // false
isGenerator(new BigUint64Array(2)); // false

isGenerator(new Float32Array(2)); // false
isGenerator(new Float64Array(2)); // false

isGenerator(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isGenerator(new WeakMap()); // false
isGenerator(new WeakSet()); // false
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
npm i @zerodep/is-generator
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Added**

- added the `@zerodep/is-generator` package
