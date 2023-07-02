# @zerodep/is-promise

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-promise?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-promise)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-promise?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-promise)
[![version](https://img.shields.io/npm/v/@zerodep/is-promise?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-promise)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a pending, resolved or rejected Promise.

Full documentation is available at the [zerodep.app](http://zerodep.app/is/[rp,ose]) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isPromise } from '@zerodep/is-promise';
// or
const { isPromise } = require('@zerodep/is-promise');
```

### Positive Response

```javascript
isPromise(new Promise(() => {})); // true
isPromise(Promise.resolve()); // true
isPromise(Promise.reject()); // true
```

### Negative Response

```javascript
isPromise(['a', 'b', 'c']); // false
isPromise(1000n); // false
isPromise(true); // false
isPromise(new Date()); // false
isPromise(''); // false
isPromise(new Error('message')); // false
isPromise(3.14); // false
isPromise(() => 'function'); // false
isPromise(42); // false
isPromise(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isPromise(null); // false
isPromise({ an: 'object' }); // false
isPromise(/[regex]+/gi); // false
isPromise(new Set([1, 2, 3])); // false
isPromise('a string'); // false
isPromise(Symbol()); // false
isPromise(new Int32Array(2)); // false
isPromise(undefined); // false
```
