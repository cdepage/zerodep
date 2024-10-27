# isObject()

[![version](https://img.shields.io/npm/v/@zerodep/is-object?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-object)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a non-null object.

## Signature

```typescript
declare const isObject: (value: unknown) => boolean;
```

### Function Parameters

The `isObject` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isObject } from '@zerodep/app';

// CJS
const { isObject } = require('@zerodep/app');
```

```javascript
// Arrays
isObject([]); // false
isObject([1, 2, 3]); // false
isObject(['a', 'b', 'c']); // false

// BigInts
isObject(42n); // false
isObject(0n); // false
isObject(-0n); // false
isObject(-42n); // false

// Booleans
isObject(true); // false
isObject(false); // false

// Class
isObject(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isObject(new Date()); // false
isObject(new Date('1970-01-01T12:00:00.000Z')); // false
isObject(new Date('2099-12-31')); // false

// Empty
isObject(null); // false
isObject(undefined); // false

// Errors
isObject(new Error('message')); // false
isObject(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isObject(3.14); // false
isObject(0.0); // false
isObject(-0.0); // false
isObject(-3.14); // false
isObject(Math.E); // false
isObject(Math.PI); // false
isObject(Number.MIN_VALUE); // false

// Functions
isObject(() => 'function'); // false
isObject(async () => 'function'); // false

// Generators
isObject(function* () {
  yield 'a';
}); // false
isObject(async function* () {
  yield 'a';
}); // false

// Maps
isObject(new Map()); // false
isObject(new Map([['key1', 123]])); // false
isObject(new Map([['key1', 'value1']])); // false

// Numbers
isObject(Number.POSITIVE_INFINITY); // false
isObject(Number.MAX_SAFE_INTEGER); // false
isObject(3e8); // false
isObject(42); // false
isObject(1); // false
isObject(0); // false
isObject(-0); // false
isObject(-1); // false
isObject(-42); // false
isObject(-3e8); // false
isObject(Number.MIN_SAFE_INTEGER); // false
isObject(Number.NEGATIVE_INFINITY); // false
isObject(Number.NaN); // false

// POJOs
isObject({}); // true
isObject({ key: 'string' }); // true
isObject({ key: 123 }); // true

// Promise
isObject(new Promise(() => {})); // false
isObject(new Promise.all([])); // false
isObject(new Promise.allSettled([])); // false
isObject(new Promise.race([])); // false
isObject(Promise.resolve()); // false

// Regular Expression
isObject(/[regex]+/gi); // false
isObject(new RegExp('d', 'gi')); // false

// Sets
isObject(new Set()); // false
isObject(new Set([1, 2, 3])); // false
isObject(new Set(['a', 'b', 'c'])); // false

// Strings
isObject(''); // false
isObject('a longer string'); // false
isObject('1000n'); // false
isObject('3e8'); // false
isObject('42'); // false
isObject('3.14'); // false
isObject('0'); // false
isObject('-0'); // false
isObject('-3.14'); // false
isObject('-42'); // false
isObject('-3e8'); // false
isObject('-1000n'); // false

// Symbols
isObject(Symbol()); // false
isObject(Symbol('name')); // false

// This
isObject(this); // false
isObject(globalThis); // false

// TypedArrays
isObject(new Int8Array(2)); // false
isObject(new Int16Array(2)); // false
isObject(new Int32Array(2)); // false
isObject(new Uint8Array(2)); // false
isObject(new Uint16Array(2)); // false
isObject(new Uint32Array(2)); // false
isObject(new Uint8ClampedArray(2)); // false

isObject(new BigInt64Array(2)); // false
isObject(new BigUint64Array(2)); // false

isObject(new Float32Array(2)); // false
isObject(new Float64Array(2)); // false

isObject(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isObject(new WeakMap()); // false
isObject(new WeakSet()); // false
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
npm i @zerodep/is-object
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.object` package to `@zerodep/is-object` for consistency across @zerodep ecosystem
