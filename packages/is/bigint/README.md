# @zerodep/is-bigint

[![version](https://img.shields.io/npm/v/@zerodep/is-bigint?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-bigint)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a BigInt.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/bigint) page.

## Signature

```typescript
declare const isBigInt: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isBigInt } from '@zerodep/is-bigint';

// CJS
const { isBigInt } = require('@zerodep/is-bigint');
```

```javascript
// Arrays
isBigInt([]); // false
isBigInt([1, 2, 3]); // false
isBigInt(['a', 'b', 'c']); // false

// BigInts
isBigInt(42n); // true
isBigInt(0n); // true
isBigInt(-0n); // true
isBigInt(-42n); // true

// Booleans
isBigInt(true); // false
isBigInt(false); // false

// Class
isBigInt(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isBigInt(new Date()); // false
isBigInt(new Date('1970-01-01T12:00:00.000Z')); // true
isBigInt(new Date('2099-12-31')); // true

// Empty
isBigInt(null); // false
isBigInt(undefined); // false

// Errors
isBigInt(new Error('message')); // false
isBigInt(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isBigInt(3.14); // false
isBigInt(0.0); // false
isBigInt(-0.0); // false
isBigInt(-3.14); // false
isBigInt(Math.E); // false
isBigInt(Math.PI); // false
isBigInt(Number.MIN_VALUE); // false

// Functions
isBigInt(() => 'function'); // false
isBigInt(async () => 'function'); // false

// Generators
isBigInt(function* () {
  yield 'a';
}); // false
isBigInt(async function* () {
  yield 'a';
}); // false

// Maps
isBigInt(new Map()); // false
isBigInt(new Map([['key1', 123]])); // false
isBigInt(new Map([['key1', 'value1']])); // false

// Numbers
isBigInt(Number.POSITIVE_INFINITY); // false
isBigInt(Number.MAX_SAFE_INTEGER); // false
isBigInt(Number.MAX_VALUE); // false
isBigInt(3e8); // false
isBigInt(42); // false
isBigInt(1); // false
isBigInt(0); // false
isBigInt(-0); // false
isBigInt(-1); // false
isBigInt(-42); // false
isBigInt(-3e8); // false
isBigInt(Number.MIN_SAFE_INTEGER); // false
isBigInt(Number.NEGATIVE_INFINITY); // false
isBigInt(Number.NaN); // false

// POJOs
isBigInt({}); // false
isBigInt({ key: 'string' }); // false
isBigInt({ key: 123 }); // false

// Promise
isBigInt(new Promise(() => {})); // false
isBigInt(new Promise.all([])); // false
isBigInt(new Promise.allSettled([])); // false
isBigInt(new Promise.race([])); // false
isBigInt(Promise.resolve()); // false

// Regular Expression
isBigInt(/[regex]+/gi); // false
isBigInt(new RegExp('d', 'gi')); // false

// Sets
isBigInt(new Set()); // false
isBigInt(new Set([1, 2, 3])); // false
isBigInt(new Set(['a', 'b', 'c'])); // false

// Strings
isBigInt(''); // false
isBigInt('a longer string'); // false
isBigInt('1000n'); // false
isBigInt('3e8'); // false
isBigInt('42'); // false
isBigInt('3.14'); // false
isBigInt('0'); // false
isBigInt('-0'); // false
isBigInt('-3.14'); // false
isBigInt('-42'); // false
isBigInt('-3e8'); // false
isBigInt('-1000n'); // false

// Symbols
isBigInt(Symbol()); // false
isBigInt(Symbol('name')); // false

// This
isBigInt(this); // false
isBigInt(globalThis); // false

// TypedArrays
isBigInt(new Int8Array(2)); // false
isBigInt(new Int16Array(2)); // false
isBigInt(new Int32Array(2)); // false
isBigInt(new Uint8Array(2)); // false
isBigInt(new Uint16Array(2)); // false
isBigInt(new Uint32Array(2)); // false
isBigInt(new Uint8ClampedArray(2)); // false

isBigInt(new BigInt64Array(2)); // false
isBigInt(new BigUint64Array(2)); // false

isBigInt(new Float32Array(2)); // false
isBigInt(new Float64Array(2)); // false

isBigInt(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isBigInt(new WeakMap()); // false
isBigInt(new WeakSet()); // false
```

---

## ZeroDep Advantages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases node_modules folder size
- **ESM & CJS** - has both ecmascript modules and common javascript exports
- **Tree Shakable** - built to be fully tree shakable ensuring your packages are the smallest possible size
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples at [zerodep.app](https://zerodep.app)
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, this includes changelogs
- **MIT Licensed** - permissively licensed for maximum usability
