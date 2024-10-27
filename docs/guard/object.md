# guardObject()

[![version](https://img.shields.io/npm/v/@zerodep/guard-object?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-object)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be an object; it will throw a `ZeroDepError` if the guard fails. Optional advanced configuration allows specifying min and/or max number of items.

## Basic Signature

```typescript
declare const guardObject: (value: unknown) => void;
```

The `guardObject` function has the following parameters:

- **value** - the value to guard

## Basic Examples

```javascript
// ESM
import { guardObject } from '@zerodep/app';

// CJS
const { guardObject } = require('@zerodep/app');
```

```javascript
// Arrays
guardObject([]); // throws ZeroDepError: Value is not an object
guardObject([1, 2, 3]); // throws ZeroDepError: Value is not an object
guardObject(['a', 'b', 'c']); // throws ZeroDepError: Value is not an object

// BigInts
guardObject(42n); // throws ZeroDepError: Value is not an object
guardObject(0n); // throws ZeroDepError: Value is not an object
guardObject(-0n); // throws ZeroDepError: Value is not an object
guardObject(-42n); // throws ZeroDepError: Value is not an object

// Booleans
guardObject(true); // throws ZeroDepError: Value is not an object
guardObject(false); // throws ZeroDepError: Value is not an object

// Class
guardObject(
  class SomeClass {
    constructor() {}
  }
); // throws ZeroDepError: Value is not an object

// Dates
guardObject(new Date()); // throws ZeroDepError: Value is not an object
guardObject(new Date('1970-01-01T12:00:00.000Z')); // throws ZeroDepError: Value is not an object
guardObject(new Date('2099-12-31')); // throws ZeroDepError: Value is not an object

// Empty
guardObject(null); // throws ZeroDepError: Value is not an object
guardObject(undefined); // throws ZeroDepError: Value is not an object

// Errors
guardObject(new Error('message')); // throws ZeroDepError: Value is not an object
guardObject(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // throws ZeroDepError: Value is not an object

// Floats
guardObject(3.14); // throws ZeroDepError: Value is not an object
guardObject(0.0); // throws ZeroDepError: Value is not an object
guardObject(-0.0); // throws ZeroDepError: Value is not an object
guardObject(-3.14); // throws ZeroDepError: Value is not an object
guardObject(Math.E); // throws ZeroDepError: Value is not an object
guardObject(Math.PI); // throws ZeroDepError: Value is not an object
guardObject(Number.MIN_VALUE); // throws ZeroDepError: Value is not an object

// Functions
guardObject(() => 'function'); // throws ZeroDepError: Value is not an object
guardObject(async () => 'function'); // throws ZeroDepError: Value is not an object

// Generators
guardObject(function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not an object
guardObject(async function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not an object

// Maps
guardObject(new Map()); // throws ZeroDepError: Value is not an object
guardObject(new Map([['key1', 123]])); // throws ZeroDepError: Value is not an object
guardObject(new Map([['key1', 'value1']])); // throws ZeroDepError: Value is not an object

// Numbers
guardObject(Number.POSITIVE_INFINITY); // throws ZeroDepError: Value is not an object
guardObject(Number.MAX_SAFE_INTEGER); // throws ZeroDepError: Value is not an object
guardObject(Number.MAX_VALUE); // throws ZeroDepError: Value is not an object
guardObject(3e8); // throws ZeroDepError: Value is not an object
guardObject(42); // throws ZeroDepError: Value is not an object
guardObject(1); // throws ZeroDepError: Value is not an object
guardObject(0); // throws ZeroDepError: Value is not an object
guardObject(-0); // throws ZeroDepError: Value is not an object
guardObject(-1); // throws ZeroDepError: Value is not an object
guardObject(-42); // throws ZeroDepError: Value is not an object
guardObject(-3e8); // throws ZeroDepError: Value is not an object
guardObject(Number.MIN_SAFE_INTEGER); // throws ZeroDepError: Value is not an object
guardObject(Number.NEGATIVE_INFINITY); // throws ZeroDepError: Value is not an object
guardObject(Number.NaN); // throws ZeroDepError: Value is not an object

// POJOs
guardObject({}); // true
guardObject({ key: 'string' }); // true
guardObject({ key: 123 }); // true

// Promise
guardObject(new Promise(() => {})); // throws ZeroDepError: Value is not an object
guardObject(new Promise.all([])); // throws ZeroDepError: Value is not an object
guardObject(new Promise.allSettled([])); // throws ZeroDepError: Value is not an object
guardObject(new Promise.race([])); // throws ZeroDepError: Value is not an object
guardObject(Promise.resolve()); // throws ZeroDepError: Value is not an object

// Regular Expression
guardObject(/[regex]+/gi); // throws ZeroDepError: Value is not an object
guardObject(new RegExp('d', 'gi')); // throws ZeroDepError: Value is not an object

// Sets
guardObject(new Set()); // throws ZeroDepError: Value is not an object
guardObject(new Set([1, 2, 3])); // throws ZeroDepError: Value is not an object
guardObject(new Set(['a', 'b', 'c'])); // throws ZeroDepError: Value is not an object

// Strings
guardObject(''); // throws ZeroDepError: Value is not an object
guardObject('a longer string'); // throws ZeroDepError: Value is not an object
guardObject('1000n'); // throws ZeroDepError: Value is not an object
guardObject('3e8'); // throws ZeroDepError: Value is not an object
guardObject('42'); // throws ZeroDepError: Value is not an object
guardObject('3.14'); // throws ZeroDepError: Value is not an object
guardObject('0'); // throws ZeroDepError: Value is not an object
guardObject('-0'); // throws ZeroDepError: Value is not an object
guardObject('-3.14'); // throws ZeroDepError: Value is not an object
guardObject('-42'); // throws ZeroDepError: Value is not an object
guardObject('-3e8'); // throws ZeroDepError: Value is not an object
guardObject('-1000n'); // throws ZeroDepError: Value is not an object

// Symbols
guardObject(Symbol()); // throws ZeroDepError: Value is not an object
guardObject(Symbol('name')); // throws ZeroDepError: Value is not an object

// This
guardObject(this); // throws ZeroDepError: Value is not an object
guardObject(globalThis); // throws ZeroDepError: Value is not an object

// TypedArrays
guardObject(new Int8Array(2)); // throws ZeroDepError: Value is not an object
guardObject(new Int16Array(2)); // throws ZeroDepError: Value is not an object
guardObject(new Int32Array(2)); // throws ZeroDepError: Value is not an object
guardObject(new Uint8Array(2)); // throws ZeroDepError: Value is not an object
guardObject(new Uint16Array(2)); // throws ZeroDepError: Value is not an object
guardObject(new Uint32Array(2)); // throws ZeroDepError: Value is not an object
guardObject(new Uint8ClampedArray(2)); // throws ZeroDepError: Value is not an object

guardObject(new BigInt64Array(2)); // throws ZeroDepError: Value is not an object
guardObject(new BigUint64Array(2)); // throws ZeroDepError: Value is not an object

guardObject(new Float32Array(2)); // throws ZeroDepError: Value is not an object
guardObject(new Float64Array(2)); // throws ZeroDepError: Value is not an object

guardObject(new SharedArrayBuffer(512)); // throws ZeroDepError: Value is not an object

// WeakMap and WeakSet
guardObject(new WeakMap()); // throws ZeroDepError: Value is not an object
guardObject(new WeakSet()); // throws ZeroDepError: Value is not an object
```

## Advanced Use

The guard may optionally be configured, via the `guardObjectHOF` function, with additional run-time quantity and value checks.

### Advanced Signature

```typescript
declare const guardObjectHOF: (options: GuardObjectOptions) => (value: unknown) => void;

interface GuardObjectOptions {
  minQuantity?: number;
  maxQuantity?: number;
}
```

#### Configuration Options

The `guardObjectHOF` has the following configuration options, all are optional:

- **minQuantity** - the minimum number of properties in the object
- **maxQuantity** - the maximum number of properties in the object

### Advanced Examples

```javascript
// ESM
import { guardObjectHOF, GuardObjectOptions } from '@zerodep/app';

// CJS
const { guardObjectHOF, GuardObjectOptions } = require('@zerodep/app');
```

**Min & Max Quantity**`

```typescript
import { guardObjectHOF, GuardObjectOptions } from '@zerodep/guard-object';

const config: GuardObjectOptions = {
  minQuantity: 2,
  maxQuantity: 5,
};

const customObjectGuard = guardObjectHOF(config);

const sampleObject1: Record<string, any> = {};
const sampleObject2: Record<string, any> = { a: 1, b: 2 };
const sampleObject3: Record<string, any> = { a: 1, b: 2, c: 3, d: 4, e: 5 };

customObjectGuard(sampleObject1); // throws ZeroDepError: Object has fewer than 2 items
customObjectGuard(sampleObject2); // void
customObjectGuard(sampleObject3); // throws ZeroDepError: Object has more than 5 items
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
npm i @zerodep/guard-object
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/guard.object` package to `@zerodep/guard-object` for consistency across @zerodep ecosystem
