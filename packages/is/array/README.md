# @zerodep/is-array

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-array?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-array)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-array?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-array)
[![version](https://img.shields.io/npm/v/@zerodep/is-array?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-array)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is an array.

Full documentation is available at the [zerodep.app](http://zerodep.app/is/array) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isArray } from '@zerodep/is-array';
// or
const { isArray } = require('@zerodep/is-array');
```

### Positive Response

```javascript
isArray([]); // true
isArray(['a', 'b', 'c']); // true
```

### Negative Response

```javascript
isArray(1000n); // false
isArray(true); // false
isArray(new Date()); // false
isArray(''); // false
isArray(new Error('message')); // false
isArray(3.14); // false
isArray(() => 'function'); // false
isArray(42); // false
isArray(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isArray(null); // false
isArray({ an: 'object' }); // false
isArray(new Promise(() => {})); // false
isArray(/[regex]+/gi); // false
isArray(new Set([1, 2, 3])); // false
isArray('a string'); // false
isArray(Symbol()); // false
isArray(new Int32Array(2)); // false
isArray(undefined); // false
```
