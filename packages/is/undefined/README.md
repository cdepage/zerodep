# @zerodep/is-undefined

[![minified size](https://img.shields.io/bundlephobia/min/@zerodep/is-array?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-array)
[![minified+gzipped size](https://img.shields.io/bundlephobia/minzip/@zerodep/is-array?style=flat-square&color=blue)](https://bundlephobia.com/package/@zerodep/is-array)
[![version](https://img.shields.io/npm/v/@zerodep/is-array?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-array)
![language](https://img.shields.io/github/languages/top/cdepage/zerodep?style=flat-square)
![language](https://img.shields.io/badge/types-included-blue?style=flat-square)

A simple, performant utility to determine if a value is a `undefined`.

Full documentation is available at the [zerodep.app](http://zerodep.app/is/undefined) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isUndefined } from '@zerodep/is-undefined';
// or
const { isUndefined } = require('@zerodep/is-undefined');
```

### Positive Response

```javascript
isUndefined(undefined); // true
```

### Negative Response

```javascript
isUndefined(['a', 'b', 'c']); // false
isUndefined(1000n); // false
isUndefined(true); // false
isUndefined(new Date()); // false
isUndefined(''); // false
isUndefined(new Error('message')); // false
isUndefined(3.14); // false
isUndefined(() => 'function'); // false
isUndefined(42); // false
isUndefined(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isUndefined(null); // false
isUndefined({ an: 'object' }); // false
isUndefined(new Promise(() => {})); // false
isUndefined(/[regex]+/gi); // false
isUndefined(new Set([1, 2, 3])); // false
isUndefined('a string'); // false
isUndefined(Symbol()); // false
isUndefined(new Int32Array(2)); // false
```
