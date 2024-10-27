# @zerodep/is-weakset

[![version](https://img.shields.io/npm/v/@zerodep/is-weakset?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-weakset)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a Weak Set.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/weakset) page.

## Signature

```typescript
declare const isWeakSet: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isWeakSet } from '@zerodep/is-weakset';
// or
const { isWeakSet } = require('@zerodep/is-weakset');
```

```javascript
// Arrays
isWeakmap([]); // false
isWeakmap([1, 2, 3]); // false
isWeakmap(['a', 'b', 'c']); // false

// BigInts
isWeakmap(42n); // false
isWeakmap(0n); // false
isWeakmap(-0n); // false
isWeakmap(-42n); // false

// Booleans
isWeakmap(true); // false
isWeakmap(false); // false

// Class
isWeakmap(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isWeakmap(new Date()); // false
isWeakmap(new Date('1970-01-01T12:00:00.000Z')); // false
isWeakmap(new Date('2099-12-31')); // false

// Empty
isWeakmap(null); // false
isWeakmap(undefined); // false

// Errors
isWeakmap(new Error('message')); // false
isWeakmap(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isWeakmap(3.14); // false
isWeakmap(0.0); // false
isWeakmap(-0.0); // false
isWeakmap(-3.14); // false
isWeakmap(Math.E); // false
isWeakmap(Math.PI); // false
isWeakmap(Number.MIN_VALUE); // false

// Functions
isWeakmap(() => 'function'); // false
isWeakmap(async () => 'function'); // false

// Generators
isWeakmap(function* () {
  yield 'a';
}); // false
isWeakmap(async function* () {
  yield 'a';
}); // false

// Maps
isWeakmap(new Map()); // false
isWeakmap(new Map([['key1', 123]])); // false
isWeakmap(new Map([['key1', 'value1']])); // false

// Numbers
isWeakmap(Number.POSITIVE_INFINITY); // false
isWeakmap(Number.MAX_SAFE_INTEGER); // false
isWeakmap(3e8); // false
isWeakmap(42); // false
isWeakmap(1); // false
isWeakmap(0); // false
isWeakmap(-0); // false
isWeakmap(-1); // false
isWeakmap(-42); // false
isWeakmap(-3e8); // false
isWeakmap(Number.MIN_SAFE_INTEGER); // false
isWeakmap(Number.NEGATIVE_INFINITY); // false
isWeakmap(Number.NaN); // false

// POJOs
isWeakmap({}); // false
isWeakmap({ key: 'string' }); // false
isWeakmap({ key: 123 }); // false

// Promise
isWeakmap(new Promise(() => {})); // false
isWeakmap(new Promise.all([])); // false
isWeakmap(new Promise.allSettled([])); // false
isWeakmap(new Promise.race([])); // false
isWeakmap(Promise.resolve()); // false

// Regular Expression
isWeakmap(/[regex]+/gi); // false
isWeakmap(new RegExp('d', 'gi')); // false

// Sets
isWeakmap(new Set()); // false
isWeakmap(new Set([1, 2, 3])); // false
isWeakmap(new Set(['a', 'b', 'c'])); // false

// Strings
isWeakmap(''); // false
isWeakmap('a longer string'); // false
isWeakmap('1000n'); // false
isWeakmap('3e8'); // false
isWeakmap('42'); // false
isWeakmap('3.14'); // false
isWeakmap('0'); // false
isWeakmap('-0'); // false
isWeakmap('-3.14'); // false
isWeakmap('-42'); // false
isWeakmap('-3e8'); // false
isWeakmap('-1000n'); // false

// Symbols
isWeakmap(Symbol()); // false
isWeakmap(Symbol('name')); // false

// This
isWeakmap(this); // false
isWeakmap(globalThis); // false

// TypedArrays
isWeakmap(new Int8Array(2)); // false
isWeakmap(new Int16Array(2)); // false
isWeakmap(new Int32Array(2)); // false
isWeakmap(new Uint8Array(2)); // false
isWeakmap(new Uint16Array(2)); // false
isWeakmap(new Uint32Array(2)); // false
isWeakmap(new Uint8ClampedArray(2)); // false

isWeakmap(new BigInt64Array(2)); // false
isWeakmap(new BigUint64Array(2)); // false

isWeakmap(new Float32Array(2)); // false
isWeakmap(new Float64Array(2)); // false

isWeakmap(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isWeakmap(new WeakMap()); // false
isWeakmap(new WeakSet()); // true
```

---

## ZeroDep Advantages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases node_modules folder size
- **ESM & CJS** - has both ecmascript modules and common javascript exports
- **Tree Shakable** - built to be fully tree shakable ensuring your packages are the smallest possible
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, this includes changelogs
- **MIT Licensed** - permissively licensed for maximum usability
