# guardInteger()

[![version](https://img.shields.io/npm/v/@zerodep/guard-integer?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-integer)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be an integer; it will throw a `ZeroDepError` if the guard fails. Optional advanced configuration allows specifying min and/or max values.

## Basic Signature

```typescript
declare const guardInteger: (value: unknown) => void;
```

The `guardInteger` function has the following parameters:

- **value** - the value to guard

## Basic Examples

```javascript
// ESM
import { guardInteger } from '@zerodep/app';

// CJS
const { guardInteger } = require('@zerodep/app');
```

```javascript
// Arrays
guardInteger([]); // throws ZeroDepError: Value is not an integer
guardInteger([1, 2, 3]); // throws ZeroDepError: Value is not an integer
guardInteger(['a', 'b', 'c']); // throws ZeroDepError: Value is not an integer

// BigInts
guardInteger(42n); // throws ZeroDepError: Value is not an integer
guardInteger(0n); // throws ZeroDepError: Value is not an integer
guardInteger(-0n); // throws ZeroDepError: Value is not an integer
guardInteger(-42n); // throws ZeroDepError: Value is not an integer

// Booleans
guardInteger(true); // throws ZeroDepError: Value is not an integer
guardInteger(false); // throws ZeroDepError: Value is not an integer

// Class
guardInteger(
  class SomeClass {
    constructor() {}
  }
); // throws ZeroDepError: Value is not an integer

// Dates
guardInteger(new Date()); // throws ZeroDepError: Value is not an integer
guardInteger(new Date('1970-01-01T12:00:00.000Z')); // throws ZeroDepError: Value is not an integer
guardInteger(new Date('2099-12-31')); // throws ZeroDepError: Value is not an integer

// Empty
guardInteger(null); // throws ZeroDepError: Value is not an integer
guardInteger(undefined); // throws ZeroDepError: Value is not an integer

// Errors
guardInteger(new Error('message')); // throws ZeroDepError: Value is not an integer
guardInteger(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // throws ZeroDepError: Value is not an integer

// Floats
guardInteger(3.14); // throws ZeroDepError: Value is not an integer
guardInteger(0.0); // void
guardInteger(-0.0); // void
guardInteger(-3.14); // throws ZeroDepError: Value is not an integer
guardInteger(Math.E); // throws ZeroDepError: Value is not an integer
guardInteger(Math.PI); // throws ZeroDepError: Value is not an integer
guardInteger(Number.MIN_VALUE); // throws ZeroDepError: Value is not an integer

// Functions
guardInteger(() => 'function'); // throws ZeroDepError: Value is not an integer
guardInteger(async () => 'function'); // throws ZeroDepError: Value is not an integer

// Generators
guardInteger(function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not an integer
guardInteger(async function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not an integer

// Maps
guardInteger(new Map()); // throws ZeroDepError: Value is not an integer
guardInteger(new Map([['key1', 123]])); // throws ZeroDepError: Value is not an integer
guardInteger(new Map([['key1', 'value1']])); // throws ZeroDepError: Value is not an integer

// Numbers
guardInteger(Number.POSITIVE_INFINITY); // throws ZeroDepError: Value is not an integer
guardInteger(Number.MAX_SAFE_INTEGER); // void
guardInteger(Number.MAX_VALUE); // void
guardInteger(3e8); // void
guardInteger(42); // void
guardInteger(1); // void
guardInteger(0); // void
guardInteger(-0); // void
guardInteger(-1); // void
guardInteger(-42); // void
guardInteger(-3e8); // void
guardInteger(Number.MIN_SAFE_INTEGER); // void
guardInteger(Number.NEGATIVE_INFINITY); // throws ZeroDepError: Value is not an integer
guardInteger(Number.NaN); // throws ZeroDepError: Value is not an integer

// POJOs
guardInteger({}); // throws ZeroDepError: Value is not an integer
guardInteger({ key: 'string' }); // throws ZeroDepError: Value is not an integer
guardInteger({ key: 123 }); // throws ZeroDepError: Value is not an integer

// Promise
guardInteger(new Promise(() => {})); // throws ZeroDepError: Value is not an integer
guardInteger(new Promise.all([])); // throws ZeroDepError: Value is not an integer
guardInteger(new Promise.allSettled([])); // throws ZeroDepError: Value is not an integer
guardInteger(new Promise.race([])); // throws ZeroDepError: Value is not an integer
guardInteger(Promise.resolve()); // throws ZeroDepError: Value is not an integer

// Regular Expression
guardInteger(/[regex]+/gi); // throws ZeroDepError: Value is not an integer
guardInteger(new RegExp('d', 'gi')); // throws ZeroDepError: Value is not an integer

// Sets
guardInteger(new Set()); // throws ZeroDepError: Value is not an integer
guardInteger(new Set([1, 2, 3])); // throws ZeroDepError: Value is not an integer
guardInteger(new Set(['a', 'b', 'c'])); // throws ZeroDepError: Value is not an integer

// Strings
guardInteger(''); // throws ZeroDepError: Value is not an integer
guardInteger('a longer string'); // throws ZeroDepError: Value is not an integer
guardInteger('1000n'); // throws ZeroDepError: Value is not an integer
guardInteger('3e8'); // throws ZeroDepError: Value is not an integer
guardInteger('42'); // throws ZeroDepError: Value is not an integer
guardInteger('3.14'); // throws ZeroDepError: Value is not an integer
guardInteger('0'); // throws ZeroDepError: Value is not an integer
guardInteger('-0'); // throws ZeroDepError: Value is not an integer
guardInteger('-3.14'); // throws ZeroDepError: Value is not an integer
guardInteger('-42'); // throws ZeroDepError: Value is not an integer
guardInteger('-3e8'); // throws ZeroDepError: Value is not an integer
guardInteger('-1000n'); // throws ZeroDepError: Value is not an integer

// Symbols
guardInteger(Symbol()); // throws ZeroDepError: Value is not an integer
guardInteger(Symbol('name')); // throws ZeroDepError: Value is not an integer

// This
guardInteger(this); // throws ZeroDepError: Value is not an integer
guardInteger(globalThis); // throws ZeroDepError: Value is not an integer

// TypedArrays
guardInteger(new Int8Array(2)); // throws ZeroDepError: Value is not an integer
guardInteger(new Int16Array(2)); // throws ZeroDepError: Value is not an integer
guardInteger(new Int32Array(2)); // throws ZeroDepError: Value is not an integer
guardInteger(new Uint8Array(2)); // throws ZeroDepError: Value is not an integer
guardInteger(new Uint16Array(2)); // throws ZeroDepError: Value is not an integer
guardInteger(new Uint32Array(2)); // throws ZeroDepError: Value is not an integer
guardInteger(new Uint8ClampedArray(2)); // throws ZeroDepError: Value is not an integer

guardInteger(new BigInt64Array(2)); // throws ZeroDepError: Value is not an integer
guardInteger(new BigUint64Array(2)); // throws ZeroDepError: Value is not an integer

guardInteger(new Float32Array(2)); // throws ZeroDepError: Value is not an integer
guardInteger(new Float64Array(2)); // throws ZeroDepError: Value is not an integer

guardInteger(new SharedArrayBuffer(512)); // throws ZeroDepError: Value is not an integer

// WeakMap and WeakSet
guardInteger(new WeakMap()); // throws ZeroDepError: Value is not an integer
guardInteger(new WeakSet()); // throws ZeroDepError: Value is not an integer
```

## Advanced Use

The guard may optionally be configured, via the `guardIntegerHOF` function, with additional range checks.

### Advanced Signature

```typescript
declare const guardIntegerHOF: (options: GuardIntegerOptions) => (value: unknown) => void;

interface GuardIntegerOptions {
  min?: number;
  max?: number;
}
```

#### Configuration Options

The `guardIntegerHOF` has the following configuration options, all are optional:

- **min** - the minimum number value allowed
- **max** - the maximum number value allowed

### Advanced Examples

```javascript
// ESM
import { guardIntegerHOF, GuardIntegerOptions } from '@zerodep/app';

// CJS
const { guardIntegerHOF, GuardIntegerOptions } = require('@zerodep/app');
```

**Min & Max Values**

```typescript
const config: GuardIntegerOptions = {
  minQuantity: 50,
  maxQuantity: 100,
};

const customIntegerGuard = guardIntegerHOF(config);

customIntegerGuard(29); // throws ZeroDepError: Integer is less than 50
customIntegerGuard(73); // void
customIntegerGuard(101); // throws ZeroDepError: Integer is greater than 100
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
npm i @zerodep/guard-integer
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/guard.integer` package to `@zerodep/guard-integer` for consistency across @zerodep ecosystem
