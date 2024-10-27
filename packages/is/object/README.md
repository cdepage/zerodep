# @zerodep/is-object

[![version](https://img.shields.io/npm/v/@zerodep/is-object?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-object)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a non-null object.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/object) page.

## Signature

```typescript
declare const isObject: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isObject } from '@zerodep/is-object';

// CJS
const { isObject } = require('@zerodep/is-object');
```

```javascript
// Arrays
isObject([]); // false
isObject([1, 2, 3]); // false
isObject(['a', 'b', 'c']); // false

// BigInts
isObject(42n); // false
isObject(0n); // false
isObject(-0n); // false
isObject(-42n); // false

// Booleans
isObject(true); // false
isObject(false); // false

// Class
isObject(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isObject(new Date()); // false
isObject(new Date('1970-01-01T12:00:00.000Z')); // false
isObject(new Date('2099-12-31')); // false

// Empty
isObject(null); // false
isObject(undefined); // false

// Errors
isObject(new Error('message')); // false
isObject(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isObject(3.14); // false
isObject(0.0); // false
isObject(-0.0); // false
isObject(-3.14); // false
isObject(Math.E); // false
isObject(Math.PI); // false
isObject(Number.MIN_VALUE); // false

// Functions
isObject(() => 'function'); // false
isObject(async () => 'function'); // false

// Generators
isObject(function* () {
  yield 'a';
}); // false
isObject(async function* () {
  yield 'a';
}); // false

// Maps
isObject(new Map()); // false
isObject(new Map([['key1', 123]])); // false
isObject(new Map([['key1', 'value1']])); // false

// Numbers
isObject(Number.POSITIVE_INFINITY); // false
isObject(Number.MAX_SAFE_INTEGER); // false
isObject(3e8); // false
isObject(42); // false
isObject(1); // false
isObject(0); // false
isObject(-0); // false
isObject(-1); // false
isObject(-42); // false
isObject(-3e8); // false
isObject(Number.MIN_SAFE_INTEGER); // false
isObject(Number.NEGATIVE_INFINITY); // false
isObject(Number.NaN); // false

// POJOs
isObject({}); // true
isObject({ key: 'string' }); // true
isObject({ key: 123 }); // true

// Promise
isObject(new Promise(() => {})); // false
isObject(new Promise.all([])); // false
isObject(new Promise.allSettled([])); // false
isObject(new Promise.race([])); // false
isObject(Promise.resolve()); // false

// Regular Expression
isObject(/[regex]+/gi); // false
isObject(new RegExp('d', 'gi')); // false

// Sets
isObject(new Set()); // false
isObject(new Set([1, 2, 3])); // false
isObject(new Set(['a', 'b', 'c'])); // false

// Strings
isObject(''); // false
isObject('a longer string'); // false
isObject('1000n'); // false
isObject('3e8'); // false
isObject('42'); // false
isObject('3.14'); // false
isObject('0'); // false
isObject('-0'); // false
isObject('-3.14'); // false
isObject('-42'); // false
isObject('-3e8'); // false
isObject('-1000n'); // false

// Symbols
isObject(Symbol()); // false
isObject(Symbol('name')); // false

// This
isObject(this); // false
isObject(globalThis); // false

// TypedArrays
isObject(new Int8Array(2)); // false
isObject(new Int16Array(2)); // false
isObject(new Int32Array(2)); // false
isObject(new Uint8Array(2)); // false
isObject(new Uint16Array(2)); // false
isObject(new Uint32Array(2)); // false
isObject(new Uint8ClampedArray(2)); // false

isObject(new BigInt64Array(2)); // false
isObject(new BigUint64Array(2)); // false

isObject(new Float32Array(2)); // false
isObject(new Float64Array(2)); // false

isObject(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isObject(new WeakMap()); // false
isObject(new WeakSet()); // false
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
