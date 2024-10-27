# @zerodep/is-map

[![version](https://img.shields.io/npm/v/@zerodep/is-map?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-map)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a Map.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/map) page.

## Signature

```typescript
declare const isMap: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isMap } from '@zerodep/is-map';

// CJS
const { isMap } = require('@zerodep/is-map');
```

```javascript
// Arrays
isMap([]); // false
isMap([1, 2, 3]); // false
isMap(['a', 'b', 'c']); // false

// BigInts
isMap(42n); // false
isMap(0n); // false
isMap(-0n); // false
isMap(-42n); // false

// Booleans
isMap(true); // false
isMap(false); // false

// Class
isMap(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isMap(new Date()); // false
isMap(new Date('1970-01-01T12:00:00.000Z')); // false
isMap(new Date('2099-12-31')); // false

// Empty
isMap(null); // false
isMap(undefined); // false

// Errors
isMap(new Error('message')); // false
isMap(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isMap(3.14); // false
isMap(0.0); // false
isMap(-0.0); // false
isMap(-3.14); // false
isMap(Math.E); // false
isMap(Math.PI); // false
isMap(Number.MIN_VALUE); // false

// Functions
isMap(() => 'function'); // false
isMap(async () => 'function'); // false

// Generators
isMap(function* () {
  yield 'a';
}); // false
isMap(async function* () {
  yield 'a';
}); // false

// Maps
isMap(new Map()); // true
isMap(new Map([['key1', 123]])); // true
isMap(new Map([['key1', 'value1']])); // true

// Numbers
isMap(Number.POSITIVE_INFINITY); // false
isMap(Number.MAX_SAFE_INTEGER); // false
isMap(3e8); // false
isMap(42); // false
isMap(1); // false
isMap(0); // false
isMap(-0); // false
isMap(-1); // false
isMap(-42); // false
isMap(-3e8); // false
isMap(Number.MIN_SAFE_INTEGER); // false
isMap(Number.NEGATIVE_INFINITY); // false
isMap(Number.NaN); // false

// POJOs
isMap({}); // false
isMap({ key: 'string' }); // false
isMap({ key: 123 }); // false

// Promise
isMap(new Promise(() => {})); // false
isMap(new Promise.all([])); // false
isMap(new Promise.allSettled([])); // false
isMap(new Promise.race([])); // false
isMap(Promise.resolve()); // false

// Regular Expression
isMap(/[regex]+/gi); // false
isMap(new RegExp('d', 'gi')); // false

// Sets
isMap(new Set()); // false
isMap(new Set([1, 2, 3])); // false
isMap(new Set(['a', 'b', 'c'])); // false

// Strings
isMap(''); // false
isMap('a longer string'); // false
isMap('1000n'); // false
isMap('3e8'); // false
isMap('42'); // false
isMap('3.14'); // false
isMap('0'); // false
isMap('-0'); // false
isMap('-3.14'); // false
isMap('-42'); // false
isMap('-3e8'); // false
isMap('-1000n'); // false

// Symbols
isMap(Symbol()); // false
isMap(Symbol('name')); // false

// This
isMap(this); // false
isMap(globalThis); // false

// TypedArrays
isMap(new Int8Array(2)); // false
isMap(new Int16Array(2)); // false
isMap(new Int32Array(2)); // false
isMap(new Uint8Array(2)); // false
isMap(new Uint16Array(2)); // false
isMap(new Uint32Array(2)); // false
isMap(new Uint8ClampedArray(2)); // false

isMap(new BigInt64Array(2)); // false
isMap(new BigUint64Array(2)); // false

isMap(new Float32Array(2)); // false
isMap(new Float64Array(2)); // false

isMap(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isMap(new WeakMap()); // false
isMap(new WeakSet()); // false
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
