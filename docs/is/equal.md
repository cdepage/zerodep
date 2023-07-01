# isEqual

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-equal?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-equal)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-equal?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-equal)
[![version](https://img.shields.io/npm/v/@zerodep/is-equal?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-equal)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A performant utility to compare two values for equality by value (not by reference). This means JSON objects with the same key:value pairs will be deemed equal as will arrays with identical items even if in different order.

## Signature

```typescript
const isEqual(value1: any, value2: any) => boolean;
```

### Function Parameters

The `isArray` function has the following parameters:

- **value** - the value to check

## Examples

### Multiple Cases

```javascript
// strings
isEqual('abc', 'abc'); // true
isEqual('abc', 'def'); // false
isEqual('', ''); // true
isEqual('G', new String('G')); // true

// integers
isEqual(42, 42); // true
isEqual(42, 12); // false
isEqual(2161, new Number(2161)); // true
isEqual(0, -0); // false

// floats
isEqual(3.141592653589793, 3.141592653589793); // true
isEqual(-273.15, new Number(-273.15)); // true

// number-like
isEqual(Math.NaN, Math.NaN); // true
isEqual(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY); // true

// booleans
isEqual(false, false); // true
isEqual(true, new Boolean(true)); // true

// bigint
isEqual(-20n, -20n); // true
isEqual(8675309n, BigInt(8675309)); // true

// nothing
isEqual(null, null); // true
isEqual(undefined, undefined); // true

// arrays (even if deeply nested)
isEqual([], []); // true
isEqual([1, 2], [1, 2]); // true
isEqual([6], [7]); // false
isEqual(['b', [2, 4, ['c', 'd', 6]]], [[4, ['c', 'd', 6], 2], 'b']); // true

// objects (even if deeply nested)
isEqual({}, {}); // true
isEqual({ c: 3, d: 4 }, { c: 3, d: 4, e: 5 }); // false
isEqual({ g: 5, h: { i: [1, 2, 3], j: ['a', 'b', 'c'] } }, { h: { j: ['a', 'b', 'c'], i: [1, 2, 3] }, g: 5 }); // true

// dates
isEqual(new Date('2000-01-01T00:00:00.000Z'), new Date('2000-01-01T00:00:00.000Z')); // true

// errors
isEqual(new Error('error 2'), new Error('error 2')); // true
isEqual(new TypeError('error'), new RangeError('error')); // false

// functions
isEqual(() => {}, () => {}); // true
isEqual(() => 'a', () => 'b'); // false

// maps
isEqual(new Map([]), new Map()); // true
isEqual(new Map([['d', 4]]), new Map([['e', 5]]); // false

isEqual(new Set([]), new Set([])); // true
isEqual(new Set([1, 2, 3]), new Set([1, 2, 3])); // true

// regex
isEqual(/\d+/g, /\d+/g); // true
isEqual(/[0-9]+/g, /[\d]+/g); // false

// array buffers
isEqual(new ArrayBuffer(12), new ArrayBuffer(12)); // true
isEqual(new ArrayBuffer(32), new ArrayBuffer(16)); // false

// typed arrays
isEqual(Int8Array.from([2]), Int8Array.from([2])); // true
isEqual(Uint8Array.from([3]), Uint8Array.from([4])); // false

// incomparables
isEqual(new WeakMap(), new WeakMap()); // throws ZeroDepError: Cannot compare WeakMap values
isEqual(new WeakSet(), new WeakSet()); // throws ZeroDepError: Cannot compare WeakSet values
isEqual(Symbol(), Symbol()); // throws ZeroDepError: Cannot compare Symbol values
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

then

```javascript
import { isEqual } from '@zerodep/app';
// or
import { isEqual } from '@zerodep/utilities';
// or
import { isEqual } from '@zerodep/is';
// or
import { isEqual } from '@zerodep/is-equal';
```

## Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

#### [2.0.0] - 2023-05-23

**Breaking**

- renamed the `@zerodep/is.equal` package to `@zerodep/is-equal` for consistency across @zerodep ecosystem
