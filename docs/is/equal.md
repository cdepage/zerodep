# isEqual

[![version](https://img.shields.io/npm/v/@zerodep/is-equal?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-equal)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to compare two values for equality by value (not by reference). Incomparable items will throw an error.

## Signature

```typescript
declare const isEqual: (value1: unknown, value2: unknown) => boolean;
```

### Function Parameters

The `isEqual` function has the following parameters:

- **value1** - the first value used in the comparison
- **value2** - the other value used in the comparison

## Examples

```javascript
// ESM
import { isEqual } from '@zerodep/app';

// CJS
const { isEqual } = require('@zerodep/app');
```

```javascript
// Arrays - size and order of items must be identical
isEqual([], []); // true
isEqual([1, 2], [1, 2]); // true
isEqual([1, 2], [2, 1]); // false
isEqual([1, 2], [1, 2, 3]); // false
isEqual(['a', 'b', 'c'], ['c', 'b', 'a']); // false
isEqual(['a', 'b', 'c'], ['a', 'b', 'c', 'd']); // false
isEqual(['b', [2, 4, ['c', 'd', 6]]], ['b', [2, 4, ['c', 'd', 6]]]); // true
isEqual(['b', [2, 4, ['c', 'd', 6]]], [[4, ['c', 'd', 6], 2], 'b']); // false

// BigInts - must have identical values
isEqual(42n, 42n); // true
isEqual(0n, 0); // false
isEqual(8675309n, BigInt(8675309)); // true

// Booleans
isEqual(true, true); // true
isEqual(true, false); // false
isEqual(true, new Boolean(true)); // true
isEqual(false, new Boolean(false)); // false

// Dates - are compared by value
isEqual(new Date('2000-01-01T00:00:00.000Z'), new Date('2000-01-01T00:00:00.000Z')); // true
isEqual(new Date('2000-01-01T00:00:00.000Z'), new Date('1999-12-31T23:59:59.999Z')); // false

// Empty
isEqual(null, null); // true
isEqual(undefined, undefined); // true
isEqual(null, undefined); // false

// Errors - are compared by type and attributes
isEqual(new Error('message'), new Error('message')); // true
isEqual(new Error('message'), new Error('xxxx')); // false
isEqual(new TypeError('error'), new RangeError('error')); // false

// Floats
isEqual(0.08, 0.08); // true
isEqual(Math.PI, Math.PI); // true
isEqual(-273.15, new Number(-273.15)); // false  <-- CAUTION `new Number()` is an object

// Functions
isEqual(
  () => 'function',
  () => 'function'
); // true
isEqual(
  () => 'xxxx',
  () => 'yyyy'
); // false

// Generators - cannot be compared
isEqual(
  function* () {
    yield 'a';
  },
  function* () {
    yield 'a';
  }
); // false
isEqual(
  function* () {
    yield 'a';
  },
  function* () {
    yield 'b';
  }
); // false

// Maps
isEqual(new Map(), new Map()); // true
isEqual(new Map([['key1', 123]])), new Map([['key1', 123]]); // true
isEqual(new Map([['key1', 123]])), new Map([['2key', 123]]); // false
isEqual(new Map([['key1', 123]])), new Map([['key1', 456]]); // false
isEqual(new Map([['key1', 123]], ['key2', 456])),
  new Map([
    ['key1', 123],
    ['key2', 456],
  ]); // true
isEqual(new Map([['key1', 123]], ['key2', 456])),
  new Map([
    ['key2', 456],
    ['key1', 123],
  ]); // true
isEqual(new Map([['key1', 123]], ['key2', 456])), new Map([['key1', 123]]); // false

// Numbers
isEqual(0, 0); // true
isEqual(0, -0); // false  <-- these are indeed different
isEqual(3e8, 3e8); // true
isEqual(1234, 5678); // false
isEqual(Infinity, Infinity); // true
isEqual(Infinity, -Infinity); // false
isEqual(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER); // true
isEqual(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER); // false
isEqual(Number.NaN, Number.NaN); // true
isEqual(2161, new Number(2161)); // false  <-- CAUTION `new Number()` is an object

// POJOs - are deeply compared by value
isEqual({}, {}); // true
isEqual({ key: 'string' }, { key: 'string' }); // true
isEqual({ key: [1, 2, 3] }, { key: [1, 2, 3] }); // true
isEqual({ key: [1, 2, 3] }, { key: [3, 2, 1] }); // false
isEqual({ a: 1, b: { c: [1, 2] } }, { a: 1, b: { c: [1, 2] } }); // true
isEqual({ a: 1, b: { c: [1, 2] } }, { b: { c: [1, 2] }, a: 1 }); // true
isEqual({ a: 1, b: { c: [1, 2] } }, { b: 1, c: { d: [1, 2] } }); // false
isEqual({ a: 1, b: { c: [1, 2] } }, { a: 1, b: { c: [2, 1] } }); // false

// Promises - cannot be compared
isEqual(new Promise(() => {}), new Promise(() => {})); // false
isEqual(Promise.all([]), Promise.all([])); // false
isEqual(Promise.allSettled([]), Promise.allSettled([])); // false
isEqual(Promise.race([]), Promise.race([])); // false
isEqual(Promise.resolve(), Promise.resolve()); // false

// Regular Expression
isEqual(/[aeiou]+/gi, /[aeiou]+/gi); // true
isEqual(new RegExp('d', 'gi'), new RegExp('d', 'gi')); // true
isEqual(/[aeiou]+/gi, new RegExp('[aeiou]+', 'gi')); // true
isEqual(new RegExp('abc'), new RegExp('def')); // false

// Sets
isEqual(new Set(), new Set()); // true
isEqual(new Set([1, 2, 3])), new Set([1, 2, 3]); // true
isEqual(new Set([1, 2, 3])), new Set([3, 2, 1]); // true  <-- CAUTION: sets are unordered
isEqual(new Set([1, 2, 3])), new Set([1, 2]); // false

// Strings
isEqual('', ''); // true
isEqual('asdf', 'asdf'); // true
isEqual('asdf', 'qwerty'); // false
isEqual('G', new String('G')); // true

// Symbols - cannot be compared
isEqual(Symbol(), Symbol()); // throws ZeroDepError - Cannot compare Symbol values
isEqual(Symbol('val1'), Symbol('val1')); // throws ZeroDepError - Cannot compare Symbol values

// TypedArrays
isEqual(new Int8Array(2), new Int8Array(2)); // true
isEqual(new SharedArrayBuffer(2), new SharedArrayBuffer(2)); // throws ZeroDepError - Cannot compare SharedArrayBuffer values

// WeakMap and WeakSet - cannot be compared
isEqual(new WeakMap(), new WeakMap()); // throws ZeroDepError - Cannot compare WeakMap values
isEqual(new WeakSet(), new WeakSet()); // throws ZeroDepError - Cannot compare WeakSet values
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
npm i @zerodep/is-equal
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.1.x

**Fixed**

- the `isEqual()` function to ignore Map keys ordering, Set value ordering, and handle array item ordering

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.equal` package to `@zerodep/is-equal` for consistency across @zerodep ecosystem
