# guardBigInt()

[![version](https://img.shields.io/npm/v/@zerodep/guard-bigint?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-bigint)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be a BigInt; it will throw a `ZeroDepError` if the guard fails. Optional advanced configuration allows specifying min and/or max values.

## Basic Signature

```typescript
declare const guardBigInt: (value: unknown) => void;
```

The `guardBigInt` function has the following parameters:

- **value** - the value to guard

## Basic Examples

```javascript
// ESM
import { guardBigInt } from '@zerodep/app';

// CJS
const { guardBigInt } = require('@zerodep/app');
```

```javascript
// Arrays
guardBigInt([]); // throws ZeroDepError: Value is not a BigInt
guardBigInt([1, 2, 3]); // throws ZeroDepError: Value is not a BigInt
guardBigInt(['a', 'b', 'c']); // throws ZeroDepError: Value is not a BigInt

// BigInts
guardBigInt(42n); // void
guardBigInt(0n); // void
guardBigInt(-0n); // void
guardBigInt(-42n); // void

// Booleans
guardBigInt(true); // throws ZeroDepError: Value is not a BigInt
guardBigInt(false); // throws ZeroDepError: Value is not a BigInt

// Class
guardBigInt(
  class SomeClass {
    constructor() {}
  }
); // throws ZeroDepError: Value is not a BigInt

// Dates
guardBigInt(new Date()); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Date('1970-01-01T12:00:00.000Z')); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Date('2099-12-31')); // throws ZeroDepError: Value is not a BigInt

// Empty
guardBigInt(null); // throws ZeroDepError: Value is not a BigInt
guardBigInt(undefined); // throws ZeroDepError: Value is not a BigInt

// Errors
guardBigInt(new Error('message')); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // throws ZeroDepError: Value is not a BigInt

// Floats
guardBigInt(3.14); // throws ZeroDepError: Value is not a BigInt
guardBigInt(0.0); // throws ZeroDepError: Value is not a BigInt
guardBigInt(-0.0); // throws ZeroDepError: Value is not a BigInt
guardBigInt(-3.14); // throws ZeroDepError: Value is not a BigInt
guardBigInt(Math.E); // throws ZeroDepError: Value is not a BigInt
guardBigInt(Math.PI); // throws ZeroDepError: Value is not a BigInt
guardBigInt(Number.MIN_VALUE); // throws ZeroDepError: Value is not a BigInt

// Functions
guardBigInt(() => 'function'); // throws ZeroDepError: Value is not a BigInt
guardBigInt(async () => 'function'); // throws ZeroDepError: Value is not a BigInt

// Generators
guardBigInt(function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not a BigInt
guardBigInt(async function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not a BigInt

// Maps
guardBigInt(new Map()); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Map([['key1', 123]])); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Map([['key1', 'value1']])); // throws ZeroDepError: Value is not a BigInt

// Numbers
guardBigInt(Number.POSITIVE_INFINITY); // throws ZeroDepError: Value is not a BigInt
guardBigInt(Number.MAX_SAFE_INTEGER); // throws ZeroDepError: Value is not a BigInt
guardBigInt(Number.MAX_VALUE); // throws ZeroDepError: Value is not a BigInt
guardBigInt(3e8); // throws ZeroDepError: Value is not a BigInt
guardBigInt(42); // throws ZeroDepError: Value is not a BigInt
guardBigInt(1); // throws ZeroDepError: Value is not a BigInt
guardBigInt(0); // throws ZeroDepError: Value is not a BigInt
guardBigInt(-0); // throws ZeroDepError: Value is not a BigInt
guardBigInt(-1); // throws ZeroDepError: Value is not a BigInt
guardBigInt(-42); // throws ZeroDepError: Value is not a BigInt
guardBigInt(-3e8); // throws ZeroDepError: Value is not a BigInt
guardBigInt(Number.MIN_SAFE_INTEGER); // throws ZeroDepError: Value is not a BigInt
guardBigInt(Number.NEGATIVE_INFINITY); // throws ZeroDepError: Value is not a BigInt
guardBigInt(Number.NaN); // throws ZeroDepError: Value is not a BigInt

// POJOs
guardBigInt({}); // throws ZeroDepError: Value is not a BigInt
guardBigInt({ key: 'string' }); // throws ZeroDepError: Value is not a BigInt
guardBigInt({ key: 123 }); // throws ZeroDepError: Value is not a BigInt

// Promise
guardBigInt(new Promise(() => {})); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Promise.all([])); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Promise.allSettled([])); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Promise.race([])); // throws ZeroDepError: Value is not a BigInt
guardBigInt(Promise.resolve()); // throws ZeroDepError: Value is not a BigInt

// Regular Expression
guardBigInt(/[regex]+/gi); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new RegExp('d', 'gi')); // throws ZeroDepError: Value is not a BigInt

// Sets
guardBigInt(new Set()); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Set(['a', 'b', 'c'])); // throws ZeroDepError: Value is not a BigInt

// Strings
guardBigInt(''); // throws ZeroDepError: Value is not a BigInt
guardBigInt('a longer string'); // throws ZeroDepError: Value is not a BigInt
guardBigInt('1000n'); // throws ZeroDepError: Value is not a BigInt
guardBigInt('3e8'); // throws ZeroDepError: Value is not a BigInt
guardBigInt('42'); // throws ZeroDepError: Value is not a BigInt
guardBigInt('3.14'); // throws ZeroDepError: Value is not a BigInt
guardBigInt('0'); // throws ZeroDepError: Value is not a BigInt
guardBigInt('-0'); // throws ZeroDepError: Value is not a BigInt
guardBigInt('-3.14'); // throws ZeroDepError: Value is not a BigInt
guardBigInt('-42'); // throws ZeroDepError: Value is not a BigInt
guardBigInt('-3e8'); // throws ZeroDepError: Value is not a BigInt
guardBigInt('-1000n'); // throws ZeroDepError: Value is not a BigInt

// Symbols
guardBigInt(Symbol()); // throws ZeroDepError: Value is not a BigInt
guardBigInt(Symbol('name')); // throws ZeroDepError: Value is not a BigInt

// This
guardBigInt(this); // throws ZeroDepError: Value is not a BigInt
guardBigInt(globalThis); // throws ZeroDepError: Value is not a BigInt

// TypedArrays
guardBigInt(new Int8Array(2)); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Int16Array(2)); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Int32Array(2)); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Uint8Array(2)); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Uint16Array(2)); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Uint32Array(2)); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Uint8ClampedArray(2)); // throws ZeroDepError: Value is not a BigInt

guardBigInt(new BigInt64Array(2)); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new BigUint64Array(2)); // throws ZeroDepError: Value is not a BigInt

guardBigInt(new Float32Array(2)); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new Float64Array(2)); // throws ZeroDepError: Value is not a BigInt

guardBigInt(new SharedArrayBuffer(512)); // throws ZeroDepError: Value is not a BigInt

// WeakMap and WeakSet
guardBigInt(new WeakMap()); // throws ZeroDepError: Value is not a BigInt
guardBigInt(new WeakSet()); // throws ZeroDepError: Value is not a BigInt
```

## Advanced Use

The guard may optionally be configured, via the `guardBigIntHOF` function, with run-time range checks.

### Advanced Signature

```typescript
declare const guardBigIntHOF: (options: GuardBigIntOptions) => (value: unknown) => void;

interface GuardBigIntOptions {
  min?: BigInt;
  max?: BigInt;
}
```

#### Configuration Options

The `GuardBigIntOptions` has the following configuration options, all are optional:

- **min** - the minimum number value allowed
- **max** - the maximum number value allowed

### Advanced Examples

```javascript
// ESM
import { guardBigIntHOF, GuardBigIntOptions } from '@zerodep/app';

// CJS
const { guardBigIntHOF, GuardBigIntOptions } = require('@zerodep/app');
```

**Min & Max Values**

```typescript
// with min & max quantity
const config1: GuardBigIntOptions = {
  min: 1000n,
  max: 5000n,
};
const customBigIntGuard1 = guardBigIntHOF(config1);

customBigIntGuard1(50n); // throws ZeroDepError: BigInt is less than 1000
customBigIntGuard1(5000n); // void
customBigIntGuard1(250000n); // throws ZeroDepError: BigInt is greater than 9999
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
npm i @zerodep/guard-bigint
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/guard.bigint` package to `@zerodep/guard-bigint` for consistency across @zerodep ecosystem
