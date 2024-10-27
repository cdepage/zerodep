# guardPojo()

[![version](https://img.shields.io/npm/v/@zerodep/guard-pojo?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-pojo)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be a POJO (plain old javascript object); it will throw a `ZeroDepError` if the guard fails. Optional advanced configuration allows specifying min and/or max number of items.

## Basic Signature

```typescript
declare const guardPojo: (value: unknown) => void;
```

The `guardPojo` function has the following parameters:

- **value** - the value to guard

## Basic Examples

```javascript
// ESM
import { guardPojo } from '@zerodep/app';

// CJS
const { guardPojo } = require('@zerodep/app');
```

```javascript
// Arrays
guardPojo([]); // void
guardPojo([1, 2, 3]); // void
guardPojo(['a', 'b', 'c']); // void

// BigInts
guardPojo(42n); // throws ZeroDepError: Value is not a JSON object
guardPojo(0n); // throws ZeroDepError: Value is not a JSON object
guardPojo(-0n); // throws ZeroDepError: Value is not a JSON object
guardPojo(-42n); // throws ZeroDepError: Value is not a JSON object

// Booleans
guardPojo(true); // throws ZeroDepError: Value is not a JSON object
guardPojo(false); // throws ZeroDepError: Value is not a JSON object

// Class
guardPojo(
  class SomeClass {
    constructor() {}
  }
); // throws ZeroDepError: Value is not a JSON object

// Dates
guardPojo(new Date()); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Date('1970-01-01T12:00:00.000Z')); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Date('2099-12-31')); // throws ZeroDepError: Value is not a JSON object

// Empty
guardPojo(null); // throws ZeroDepError: Value is not a JSON object  <-- CAUTION: null values are excluded
guardPojo(undefined); // throws ZeroDepError: Value is not a JSON object

// Errors
guardPojo(new Error('message')); // throws ZeroDepError: Value is not a JSON object
guardPojo(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // throws ZeroDepError: Value is not a JSON object

// Floats
guardPojo(3.14); // throws ZeroDepError: Value is not a JSON object
guardPojo(0.0); // throws ZeroDepError: Value is not a JSON object
guardPojo(-0.0); // throws ZeroDepError: Value is not a JSON object
guardPojo(-3.14); // throws ZeroDepError: Value is not a JSON object
guardPojo(Math.E); // throws ZeroDepError: Value is not a JSON object
guardPojo(Math.PI); // throws ZeroDepError: Value is not a JSON object
guardPojo(Number.MIN_VALUE); // throws ZeroDepError: Value is not a JSON object

// Functions
guardPojo(() => 'function'); // throws ZeroDepError: Value is not a JSON object
guardPojo(async () => 'function'); // throws ZeroDepError: Value is not a JSON object

// Generators
guardPojo(function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not a JSON object
guardPojo(async function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not a JSON object

// Maps
guardPojo(new Map()); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Map([['key1', 123]])); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Map([['key1', 'value1']])); // throws ZeroDepError: Value is not a JSON object

// Numbers
guardPojo(Number.POSITIVE_INFINITY); // throws ZeroDepError: Value is not a JSON object
guardPojo(Number.MAX_SAFE_INTEGER); // throws ZeroDepError: Value is not a JSON object
guardPojo(Number.MAX_VALUE); // throws ZeroDepError: Value is not a JSON object
guardPojo(3e8); // throws ZeroDepError: Value is not a JSON object
guardPojo(42); // throws ZeroDepError: Value is not a JSON object
guardPojo(1); // throws ZeroDepError: Value is not a JSON object
guardPojo(0); // throws ZeroDepError: Value is not a JSON object
guardPojo(-0); // throws ZeroDepError: Value is not a JSON object
guardPojo(-1); // throws ZeroDepError: Value is not a JSON object
guardPojo(-42); // throws ZeroDepError: Value is not a JSON object
guardPojo(-3e8); // throws ZeroDepError: Value is not a JSON object
guardPojo(Number.MIN_SAFE_INTEGER); // throws ZeroDepError: Value is not a JSON object
guardPojo(Number.NEGATIVE_INFINITY); // throws ZeroDepError: Value is not a JSON object
guardPojo(Number.NaN); // throws ZeroDepError: Value is not a JSON object

// POJOs
guardPojo({}); // void
guardPojo({ key: 'string' }); // void
guardPojo({ key: 123 }); // void

// Promise
guardPojo(new Promise(() => {})); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Promise.all([])); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Promise.allSettled([])); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Promise.race([])); // throws ZeroDepError: Value is not a JSON object
guardPojo(Promise.resolve()); // throws ZeroDepError: Value is not a JSON object

// Regular Expression
guardPojo(/[regex]+/gi); // throws ZeroDepError: Value is not a JSON object
guardPojo(new RegExp('d', 'gi')); // throws ZeroDepError: Value is not a JSON object

// Sets
guardPojo(new Set()); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Set(['a', 'b', 'c'])); // throws ZeroDepError: Value is not a JSON object

// Strings
guardPojo(''); // throws ZeroDepError: Value is not a JSON object
guardPojo('a longer string'); // throws ZeroDepError: Value is not a JSON object
guardPojo('1000n'); // throws ZeroDepError: Value is not a JSON object
guardPojo('3e8'); // throws ZeroDepError: Value is not a JSON object
guardPojo('42'); // throws ZeroDepError: Value is not a JSON object
guardPojo('3.14'); // throws ZeroDepError: Value is not a JSON object
guardPojo('0'); // throws ZeroDepError: Value is not a JSON object
guardPojo('-0'); // throws ZeroDepError: Value is not a JSON object
guardPojo('-3.14'); // throws ZeroDepError: Value is not a JSON object
guardPojo('-42'); // throws ZeroDepError: Value is not a JSON object
guardPojo('-3e8'); // throws ZeroDepError: Value is not a JSON object
guardPojo('-1000n'); // throws ZeroDepError: Value is not a JSON object

// Symbols
guardPojo(Symbol()); // throws ZeroDepError: Value is not a JSON object
guardPojo(Symbol('name')); // throws ZeroDepError: Value is not a JSON object

// This
guardPojo(this); // throws ZeroDepError: Value is not a JSON object
guardPojo(globalThis); // throws ZeroDepError: Value is not a JSON object

// TypedArrays
guardPojo(new Int8Array(2)); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Int16Array(2)); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Int32Array(2)); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Uint8Array(2)); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Uint16Array(2)); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Uint32Array(2)); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Uint8ClampedArray(2)); // throws ZeroDepError: Value is not a JSON object

guardPojo(new BigInt64Array(2)); // throws ZeroDepError: Value is not a JSON object
guardPojo(new BigUint64Array(2)); // throws ZeroDepError: Value is not a JSON object

guardPojo(new Float32Array(2)); // throws ZeroDepError: Value is not a JSON object
guardPojo(new Float64Array(2)); // throws ZeroDepError: Value is not a JSON object

guardPojo(new SharedArrayBuffer(512)); // throws ZeroDepError: Value is not a JSON object

// WeakMap and WeakSet
guardPojo(new WeakMap()); // throws ZeroDepError: Value is not a JSON object
guardPojo(new WeakSet()); // throws ZeroDepError: Value is not a JSON object
```

## Advanced Use

The guard may optionally be configured, via the `guardPojoHOF` function, with additional run-time checks.

### Advanced Signature

```typescript
declare const guardPojoHOF: (options: GuardPojoOptions) => (value: unknown) => void;

interface GuardPojoOptions {
  minQuantity?: number;
  maxQuantity?: number;
}
```

#### Configuration Options

The `guardPojoHOF` has the following configuration options, all are optional:

- **minQuantity** - the minimum number of properties in the object
- **maxQuantity** - the maximum number of properties in the object

### Advanced Examples

```javascript
// ESM
import { guardPojoHOF, GuardPojoOptions } from '@zerodep/app';

// CJS
const { guardPojoHOF, GuardPojoOptions } = require('@zerodep/app');
```

**Min & Max Quantity**

```typescript
const config: guardPojoOptions = {
  minQuantity: 2,
  maxQuantity: 3,
};

const customPojoGuard = guardPojoHOF(config);

const sampleObject1: Record<string, any> = {};
const sampleObject2: Record<string, any> = { a: 1, b: 2 };
const sampleObject3: Record<string, any> = { a: 1, b: 2, c: 3, d: 4, e: 5 };

customPojoGuard(sampleObject1); // throws ZeroDepError: JSON object has fewer than 2 items
customPojoGuard(sampleObject2); // void
customPojoGuard(sampleObject3); // throws ZeroDepError: JSON object has more than 3 items
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
npm i @zerodep/guard-pojo
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/guard.pojo` package to `@zerodep/guard-pojo` for consistency across @zerodep ecosystem
