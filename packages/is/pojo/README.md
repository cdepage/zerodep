# @zerodep/is-pojo

[![version](https://img.shields.io/npm/v/@zerodep/is-pojo?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-pojo)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a non-null, serializable Plain Old Javascript Object (POJO).

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/pojo) page.

## Signature

```typescript
declare const isPojo: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isPojo } from '@zerodep/is-pojo';

// CJS
const { isPojo } = require('@zerodep/is-pojo');
```

```javascript
// Arrays
isPojo([]); // true
isPojo([1, 2, 3]); // true
isPojo(['a', 'b', 'c']); // true

// BigInts
isPojo(42n); // false
isPojo(0n); // false
isPojo(-0n); // false
isPojo(-42n); // false

// Booleans
isPojo(true); // false
isPojo(false); // false

// Class
isPojo(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isPojo(new Date()); // false
isPojo(new Date('1970-01-01T12:00:00.000Z')); // false
isPojo(new Date('2099-12-31')); // false

// Empty
isPojo(null); // false  <-- CAUTION: null values are excluded
isPojo(undefined); // false

// Errors
isPojo(new Error('message')); // false
isPojo(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isPojo(3.14); // false
isPojo(0.0); // false
isPojo(-0.0); // false
isPojo(-3.14); // false
isPojo(Math.E); // false
isPojo(Math.PI); // false
isPojo(Number.MIN_VALUE); // false

// Functions
isPojo(() => 'function'); // false
isPojo(async () => 'function'); // false

// Generators
isPojo(function* () {
  yield 'a';
}); // false
isPojo(async function* () {
  yield 'a';
}); // false

// Maps
isPojo(new Map()); // false
isPojo(new Map([['key1', 123]])); // false
isPojo(new Map([['key1', 'value1']])); // false

// Numbers
isPojo(Number.POSITIVE_INFINITY); // false
isPojo(Number.MAX_SAFE_INTEGER); // false
isPojo(3e8); // false
isPojo(42); // false
isPojo(1); // false
isPojo(0); // false
isPojo(-0); // false
isPojo(-1); // false
isPojo(-42); // false
isPojo(-3e8); // false
isPojo(Number.MIN_SAFE_INTEGER); // false
isPojo(Number.NEGATIVE_INFINITY); // false
isPojo(Number.NaN); // false

// POJOs
isPojo({}); // true
isPojo({ key: 'string' }); // true
isPojo({ key: 123 }); // true

// Promise
isPojo(new Promise(() => {})); // false
isPojo(new Promise.all([])); // false
isPojo(new Promise.allSettled([])); // false
isPojo(new Promise.race([])); // false
isPojo(Promise.resolve()); // false

// Regular Expression
isPojo(/[regex]+/gi); // false
isPojo(new RegExp('d', 'gi')); // false

// Sets
isPojo(new Set()); // false
isPojo(new Set([1, 2, 3])); // false
isPojo(new Set(['a', 'b', 'c'])); // false

// Strings
isPojo(''); // false
isPojo('a longer string'); // false
isPojo('1000n'); // false
isPojo('3e8'); // false
isPojo('42'); // false
isPojo('3.14'); // false
isPojo('0'); // false
isPojo('-0'); // false
isPojo('-3.14'); // false
isPojo('-42'); // false
isPojo('-3e8'); // false
isPojo('-1000n'); // false

// Symbols
isPojo(Symbol()); // false
isPojo(Symbol('name')); // false

// This
isPojo(this); // false
isPojo(globalThis); // false

// TypedArrays
isPojo(new Int8Array(2)); // false
isPojo(new Int16Array(2)); // false
isPojo(new Int32Array(2)); // false
isPojo(new Uint8Array(2)); // false
isPojo(new Uint16Array(2)); // false
isPojo(new Uint32Array(2)); // false
isPojo(new Uint8ClampedArray(2)); // false

isPojo(new BigInt64Array(2)); // false
isPojo(new BigUint64Array(2)); // false

isPojo(new Float32Array(2)); // false
isPojo(new Float64Array(2)); // false

isPojo(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isPojo(new WeakMap()); // false
isPojo(new WeakSet()); // false
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
