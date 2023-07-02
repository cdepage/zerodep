# @zerodep/is-typedarray

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-typedarray?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-typedarray)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-typedarray?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-typedarray)
[![version](https://img.shields.io/npm/v/@zerodep/is-typedarray?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-typedarray)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a Typed Array.

Full documentation is available at the [zerodep.app](http://zerodep.app/is/typedarray) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isTypedArray } from '@zerodep/is-typedarray';
// or
const { isTypedArray } = require('@zerodep/is-typedarray');
```

### Positive Response

```javascript
isTypedArray(new Int8Array(2)); // true
isTypedArray(new Uint8Array(2)); // true
isTypedArray(new Uint8ClampedArray(2)); // true
isTypedArray(new Int16Array(2)); // true
isTypedArray(new Uint16Array(2)); // true
isTypedArray(new Int32Array(2)); // true
isTypedArray(new Uint32Array(2)); // true
isTypedArray(new Float32Array(2)); // true
isTypedArray(new Float64Array(2)); // true
```

### Negative Response

```javascript
isTypedArray(['a', 'b', 'c']); // false
isTypedArray(1000n); // false
isTypedArray(true); // false
isTypedArray(new Date()); // false
isTypedArray(''); // false
isTypedArray(new Error('message')); // false
isTypedArray(3.14); // false
isTypedArray(() => 'function'); // false
isTypedArray(42); // false
isTypedArray(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isTypedArray(null); // false
isTypedArray({ an: 'object' }); // false
isTypedArray(new Promise(() => {})); // false
isTypedArray(/[regex]+/gi); // false
isTypedArray(new Set([1, 2, 3])); // false
isTypedArray('a string'); // false
isTypedArray(Symbol()); // false
isTypedArray(undefined); // false
```
