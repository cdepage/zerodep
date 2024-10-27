# @zerodep/is-set

[![version](https://img.shields.io/npm/v/@zerodep/is-set?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-set)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a Set.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/set) page.

## Signature

```typescript
declare const isSet: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isSet } from '@zerodep/is-set';

// CJS
const { isSet } = require('@zerodep/is-set');
```

```javascript
// Arrays
isSet([]); // false
isSet([1, 2, 3]); // false
isSet(['a', 'b', 'c']); // false

// BigInts
isSet(42n); // false
isSet(0n); // false
isSet(-0n); // false
isSet(-42n); // false

// Booleans
isSet(true); // false
isSet(false); // false

// Class
isSet(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isSet(new Date()); // false
isSet(new Date('1970-01-01T12:00:00.000Z')); // false
isSet(new Date('2099-12-31')); // false

// Empty
isSet(null); // false
isSet(undefined); // false

// Errors
isSet(new Error('message')); // false
isSet(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isSet(3.14); // false
isSet(0.0); // false
isSet(-0.0); // false
isSet(-3.14); // false
isSet(Math.E); // false
isSet(Math.PI); // false
isSet(Number.MIN_VALUE); // false

// Functions
isSet(() => 'function'); // false
isSet(async () => 'function'); // false

// Generators
isSet(function* () {
  yield 'a';
}); // false
isSet(async function* () {
  yield 'a';
}); // false

// Maps
isSet(new Map()); // false
isSet(new Map([['key1', 123]])); // false
isSet(new Map([['key1', 'value1']])); // false

// Numbers
isSet(Number.POSITIVE_INFINITY); // false
isSet(Number.MAX_SAFE_INTEGER); // false
isSet(3e8); // false
isSet(42); // false
isSet(1); // false
isSet(0); // false
isSet(-0); // false
isSet(-1); // false
isSet(-42); // false
isSet(-3e8); // false
isSet(Number.MIN_SAFE_INTEGER); // false
isSet(Number.NEGATIVE_INFINITY); // false
isSet(Number.NaN); // false

// POJOs
isSet({}); // false
isSet({ key: 'string' }); // false
isSet({ key: 123 }); // false

// Promise
isSet(new Promise(() => {})); // false
isSet(new Promise.all([])); // false
isSet(new Promise.allSettled([])); // false
isSet(new Promise.race([])); // false
isSet(Promise.resolve()); // false

// Regular Expression
isSet(/[regex]+/gi); // false
isSet(new RegExp('d', 'gi')); // false

// Sets
isSet(new Set()); // true
isSet(new Set([1, 2, 3])); // true
isSet(new Set(['a', 'b', 'c'])); // true

// Strings
isSet(''); // false
isSet('a longer string'); // false
isSet('1000n'); // false
isSet('3e8'); // false
isSet('42'); // false
isSet('3.14'); // false
isSet('0'); // false
isSet('-0'); // false
isSet('-3.14'); // false
isSet('-42'); // false
isSet('-3e8'); // false
isSet('-1000n'); // false

// Symbols
isSet(Symbol()); // false
isSet(Symbol('name')); // false

// This
isSet(this); // false
isSet(globalThis); // false

// TypedArrays
isSet(new Int8Array(2)); // false
isSet(new Int16Array(2)); // false
isSet(new Int32Array(2)); // false
isSet(new Uint8Array(2)); // false
isSet(new Uint16Array(2)); // false
isSet(new Uint32Array(2)); // false
isSet(new Uint8ClampedArray(2)); // false

isSet(new BigInt64Array(2)); // false
isSet(new BigUint64Array(2)); // false

isSet(new Float32Array(2)); // false
isSet(new Float64Array(2)); // false

isSet(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isSet(new WeakMap()); // false
isSet(new WeakSet()); // false
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
